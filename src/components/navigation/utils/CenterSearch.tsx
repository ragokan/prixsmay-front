import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { ColorProp } from "../../utility/ColorModeSwitcher";

export const CenterSearch: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <InputGroup maxWidth={isMobile ? 150 : 250} m="auto">
    <InputLeftElement
      pointerEvents="none"
      children={<FaSearch color="gray.300" />}
      fontSize={isMobile ? "xs" : "sm"}
      marginTop={-1}
    />
    <Input type="text" placeholder="Search..." colorScheme={ColorProp} size="sm" />
  </InputGroup>
);
