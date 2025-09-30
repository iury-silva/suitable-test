// 12:00:00 -> 12:00
export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":");
  return `${hours}:${minutes}`;
}
