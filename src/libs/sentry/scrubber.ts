import type {
  Breadcrumb,
  ErrorEvent,
  TransactionEvent,
} from "@sentry/react-native";

const REDACTED = "[redacted]";

/** Keys that hold network identifiers and must never leave the device. */
const SENSITIVE_KEY =
  /(^|[_.-])(ssid|bssid|ip|ip_?address|ipv4|ipv6|mac|mac_?address|gateway|subnet|dns)$/i;

/** BSSIDs and other MAC addresses, such as `a4:2b:b0:12:34:56`. */
const MAC_ADDRESS = /\b(?:[0-9a-f]{2}[:-]){5}[0-9a-f]{2}\b/gi;

/** IPv4 addresses, such as `192.168.0.10`. */
const IPV4_ADDRESS =
  /\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)\b/g;

/** IPv6 addresses, full (`2001:db8:0:0:0:0:0:1`) or compressed (`fe80::1c2b`). */
const IPV6_ADDRESS =
  /\b(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4}\b|(?:\b[0-9a-f]{1,4}(?::[0-9a-f]{1,4}){0,6})?::(?:[0-9a-f]{1,4}(?::[0-9a-f]{1,4}){0,6}\b)?/gi;

const MAX_DEPTH = 8;

export function scrubText(text: string) {
  return text
    .replace(MAC_ADDRESS, REDACTED)
    .replace(IPV6_ADDRESS, (match) => (match === "::" ? match : REDACTED))
    .replace(IPV4_ADDRESS, REDACTED);
}

function scrubValue(value: unknown, depth = 0): unknown {
  if (typeof value === "string") {
    return scrubText(value);
  }

  if (depth >= MAX_DEPTH || value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => scrubValue(item, depth + 1));
  }

  const result: Record<string, unknown> = {};

  for (const [key, item] of Object.entries(value)) {
    result[key] = SENSITIVE_KEY.test(key)
      ? REDACTED
      : scrubValue(item, depth + 1);
  }

  return result;
}

function scrubObject<T>(value: T): T {
  return scrubValue(value) as T;
}

/**
 * Removes SSID, BSSID and IP addresses from an event before it is sent.
 * It is a safety net: the app itself never logs network details.
 */
export function scrubEvent<T extends ErrorEvent | TransactionEvent>(event: T) {
  if (event.user) {
    event.user = { id: event.user.id };
  }

  if (event.request) {
    delete event.request.headers;
    delete event.request.cookies;
    delete event.request.data;
  }

  if (event.message) {
    event.message = scrubText(event.message);
  }

  if (event.exception?.values) {
    for (const exception of event.exception.values) {
      if (exception.value) {
        exception.value = scrubText(exception.value);
      }
    }
  }

  event.extra = event.extra && scrubObject(event.extra);
  event.contexts = event.contexts && scrubObject(event.contexts);
  event.tags = event.tags && scrubObject(event.tags);
  event.breadcrumbs = event.breadcrumbs
    ?.map(scrubBreadcrumb)
    .filter((breadcrumb): breadcrumb is Breadcrumb => breadcrumb !== null);

  if (event.type === "transaction" && event.spans) {
    for (const span of event.spans) {
      span.description = span.description && scrubText(span.description);
      span.data = span.data && scrubObject(span.data);
    }
  }

  return event;
}

/** Drops console output and scrubs everything else a breadcrumb carries. */
export function scrubBreadcrumb(breadcrumb: Breadcrumb): Breadcrumb | null {
  if (breadcrumb.category === "console") {
    return null;
  }

  return {
    ...breadcrumb,
    message: breadcrumb.message && scrubText(breadcrumb.message),
    data: breadcrumb.data && scrubObject(breadcrumb.data),
  };
}
