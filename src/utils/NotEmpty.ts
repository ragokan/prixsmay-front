export const NotEmpty = <T>(obj: T): boolean => {
  if (!obj) return false
  return Object.keys(obj).length > 0
}
