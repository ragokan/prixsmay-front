import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import React from "react"
import { FaSearch } from "react-icons/fa"
import { ColorProp } from "../../utility/ColorModeSwitcher"

export const CenterSearch: React.FC<{ isPhone: boolean }> = ({ isPhone }) => (
  <InputGroup maxWidth={isPhone ? 150 : 500} m="auto">
    <InputLeftElement
      pointerEvents="none"
      children={<FaSearch color="gray.300" />}
      fontSize={isPhone ? "xs" : "sm"}
      marginTop={-1}
    />
    <Input type="text" placeholder="Search..." colorScheme={ColorProp} size="sm" />
  </InputGroup>
)
