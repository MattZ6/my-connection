import { useEffect, useState } from "react";

function secondsSince(date: Date | null) {
  if (!date) {
    return null;
  }

  return Math.floor((Date.now() - date.getTime()) / 1000);
}

/** Seconds since `date`, ticking every second. `null` when there is no date. */
export function useElapsedSeconds(date: Date | null) {
  const [seconds, setSeconds] = useState(() => secondsSince(date));

  useEffect(() => {
    setSeconds(secondsSince(date));

    if (!date) {
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds(secondsSince(date));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return seconds;
}
