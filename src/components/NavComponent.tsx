import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react"
import React from "react"
import { FaSun, FaFilter, FaSearch } from "react-icons/fa"
import { ColorProp } from "./ColorModeSwitcher"
import { ResponsiveNavLinks } from "./links/ResponsiveNavLinks"

export const NavComponent = () => {
  const { colorMode } = useColorMode()
  const [isMobile] = useMediaQuery("(max-width: 800px)")
  const [isPhone] = useMediaQuery("(max-width: 500px)")

  return (
    <Flex zIndex={10} position="sticky" top={0} p={2} bg={colorMode === "dark" ? "#1A1A1B" : "#FFFFFF"}>
      <Flex flex={1} m="auto" align="center">
        <Heading size="md">
          {!isMobile && <FaSun style={{ display: "inline", marginTop: -3 }} />}
          Prixsmay
        </Heading>

        <Select
          maxWidth={isPhone ? 100 : 200}
          icon={<FaFilter />}
          colorScheme="gray"
          size="sm"
          iconSize="sm"
          fontSize={isPhone ? "xs" : "sm"}
          defaultValue="option1"
          ml={isPhone ? 2 : 10}
          mr={isPhone ? 2 : 5}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <InputGroup maxWidth={isPhone ? 150 : 500} m="auto">
          <InputLeftElement
            pointerEvents="none"
            children={<FaSearch color="gray.300" />}
            fontSize={isPhone ? "xs" : "sm"}
            marginTop={-1}
          />
          <Input type="text" placeholder="Search..." colorScheme={ColorProp} size="sm" />
        </InputGroup>
        <Box ml="auto">
          <ResponsiveNavLinks />
        </Box>
      </Flex>
    </Flex>
  )
}
