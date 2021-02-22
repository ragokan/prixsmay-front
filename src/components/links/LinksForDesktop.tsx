import { MenuItem, MenuList } from "@chakra-ui/react"
import { NavigationLinks } from "./NavigationLinks"

export const LinksForDesktop: React.FC = (props) => (
  <MenuList>
    {NavigationLinks.map((link, index) => (
      <MenuItem key={index}>{link.name}</MenuItem>
    ))}
    {props.children}
  </MenuList>
)
