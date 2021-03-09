import { Button } from "@chakra-ui/react";
import React from "react";
import { BothLink } from "../../../utility/BothLink";

export const NavButton: React.FC<{ href: string; title: string; isBlue?: boolean }> = ({ href, title, isBlue }) => (
  <Button mr="2" colorScheme={isBlue ? "blue" : "gray"}>
    <BothLink href={href} _hover={{ textDecoration: "none" }} style={{ color: isBlue && "white" }}>
      {title}
    </BothLink>
  </Button>
);
