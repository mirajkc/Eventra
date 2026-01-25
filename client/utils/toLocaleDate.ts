export function toLocalDate(value: string | null) {
  if (!value) return null

  const [datePart, timePart] = value.split("T")
  const [year, month, day] = datePart.split("-").map(Number)
  const [hour, minute] = timePart.split(":").map(Number)

  return new Date(year, month - 1, day, hour, minute)
}

export function toDateTimeInputValue(date: Date | null) {
  if (!date) return ""

  const pad = (n: number) => n.toString().padStart(2, "0")

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}`
}
