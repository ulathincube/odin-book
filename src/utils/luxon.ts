import { DateTime } from "luxon"

export function getTimeDifference(time: string) {
  const end = DateTime.now()
  const start = DateTime.fromISO(time)

  const difference = end
    .diff(start, ["days", "hours", "minutes", "seconds"])
    .toObject()
  return difference
}
