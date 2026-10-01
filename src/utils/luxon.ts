import { DateTime } from "luxon"

export function getTimeDifference(time: string) {
  const end = DateTime.now()
  const start = DateTime.fromISO(time)

  const difference = end
    .diff(start, ["months", "weeks", "days", "hours", "minutes", "seconds"])
    .toObject()
  return difference
}

export function parseDate(time: string): string {
  if (!time) {
    time = DateTime.now().toLocaleString()
  }
  return DateTime.fromSQL(time).toFormat("DDD")
}
