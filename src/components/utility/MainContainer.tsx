import { Box, useColorMode } from "@chakra-ui/react"
import React from "react"

const MainContainer: React.FC = (props) => {
  const { colorMode } = useColorMode()

  return <Box bg={colorMode === "dark" ? "#030303" : "#D9E0E6"}>{props.children}</Box>
}

export default MainContainer
