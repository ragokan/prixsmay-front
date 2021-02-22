import { Button, Menu, MenuButton } from "@chakra-ui/react"
import React from "react"
import { FaChevronDown } from "react-icons/fa"
import { ColorModeSwitcher } from "../../utility/ColorModeSwitcher"
import { LinksForDesktop } from "./LinksForDesktop"

export const DesktopLinks: React.FC<{ user: any }> = ({ user }) => (
  <Menu>
    <MenuButton as={Button} rightIcon={<FaChevronDown />}>
      {user}
    </MenuButton>
    <LinksForDesktop>
      <ColorModeSwitcher fontWeight="normal" marginLeft="3" marginTop="2" />
    </LinksForDesktop>
  </Menu>
)
