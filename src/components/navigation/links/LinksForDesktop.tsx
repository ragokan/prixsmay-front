import { MenuItem, MenuList } from "@chakra-ui/react"
import { NavigationLinks } from "./NavigationLinks"
import Link from "next/link"

export const LinksForDesktop: React.FC = (props) => (
  <MenuList>
    {NavigationLinks.map((link, index) => (
      <Link href={link.route} key={index}>
        <MenuItem> {link.name}</MenuItem>
      </Link>
    ))}
    {props.children}
  </MenuList>
)
