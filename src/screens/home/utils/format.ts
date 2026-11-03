/** Formats a Wi-Fi frequency in MHz (e.g. 5180) as GHz (e.g. "5.18"). */
export function formatFrequency(frequencyInMHz: number) {
  return (frequencyInMHz / 1000).toFixed(2).replace(/0$/, "");
}

/**
 * Returns the download/upload link speeds, falling back to the overall link
 * speed when Android does not report each direction.
 */
export function getLinkSpeeds(details: {
  linkSpeed: number | null;
  rxLinkSpeed: number | null;
  txLinkSpeed: number | null;
}) {
  const download = details.rxLinkSpeed ?? details.linkSpeed;
  const upload = details.txLinkSpeed ?? details.linkSpeed;

  if (download === null && upload === null) {
    return null;
  }

  return { download, upload };
}
