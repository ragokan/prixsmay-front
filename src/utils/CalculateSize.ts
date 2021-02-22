export function CalculateSize(isMobile: boolean, isComment: boolean) {
  let size: "xs" | "sm" | "md"
  if (isMobile) size = isComment ? "xs" : "sm"
  else size = isComment ? "sm" : "md"
  return size
}
