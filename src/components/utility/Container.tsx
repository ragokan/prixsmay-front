import { Box, BoxProps, useColorMode } from "@chakra-ui/react"
import React from "react"
import { Wrapper } from "./Wrapper"

export const Container: React.FC<BoxProps> = (props) => {
  const { colorMode } = useColorMode()
  return (
    <Wrapper>
      <Box backgroundColor={colorMode === "dark" ? "#1A1A1B" : "#FFFFFF"} p={10} borderRadius={10} {...props}>
        {props.children}
      </Box>
    </Wrapper>
  )
}
