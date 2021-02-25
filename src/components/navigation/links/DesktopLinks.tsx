import { Avatar, Button, Menu, MenuButton } from "@chakra-ui/react"
import React from "react"
import { FaChevronDown } from "react-icons/fa"
import { IUser } from "../../../types/UserType"
import { ColorModeSwitcher } from "../../utility/ColorModeSwitcher"
import { LinksForDesktop } from "./LinksForDesktop"

export const DesktopLinks: React.FC<{ user: IUser }> = ({ user }) => (
  <Menu>
    <MenuButton as={Button} rightIcon={<FaChevronDown />}>
      <Avatar size="xs" marginTop={-1} src={user?.profile?.picture} /> {user?.username || "Guest"}
    </MenuButton>
    <LinksForDesktop isLogged={Boolean(user)}>
      <ColorModeSwitcher fontWeight="normal" marginLeft="3" marginTop="2" />
    </LinksForDesktop>
  </Menu>
)
