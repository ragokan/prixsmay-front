import { useMediaQuery } from "@chakra-ui/react"
import React from "react"
import { DesktopLinks } from "./DesktopLinks"
import { MobileLinks } from "./MobileLinks"

export const ResponsiveNavLinks = () => {
  const [isMobile] = useMediaQuery("(max-width: 800px)")

  return isMobile ? <MobileLinks user={"Ragokan"} /> : <DesktopLinks user={"Ragokan"} />
}
