import { Box, Flex, Heading, useColorMode, useMediaQuery } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import { FaSun } from "react-icons/fa"
import { ResponsiveNavLinks } from "./links/ResponsiveNavLinks"
import { LeftSelect } from "./utils/LeftSelect"
import { CenterSearch } from "./utils/CenterSearch"

export const NavComponent = () => {
  const { colorMode } = useColorMode()
  const [isMobile] = useMediaQuery("(max-width: 800px)")
  const [isPhone] = useMediaQuery("(max-width: 500px)")

  return (
    <Flex zIndex={10} position="sticky" top={0} p={2} bg={colorMode === "dark" ? "#1A1A1B" : "#FFFFFF"}>
      <Flex flex={1} m="auto" align="center">
        <Link href="/">
          <Heading size="md" cursor="pointer">
            {!isMobile && <FaSun style={{ display: "inline", marginTop: -3 }} />}
            Prixsmay
          </Heading>
        </Link>

        <LeftSelect isPhone={isPhone} />
        <CenterSearch isPhone={isPhone} />

        <Box ml="auto">
          <ResponsiveNavLinks />
        </Box>
      </Flex>
    </Flex>
  )
}
