import { MenuItem, MenuList } from "@chakra-ui/react"
import { NavigationLinks } from "./NavigationLinks"
import Link from "next/link"

export const LinksForDesktop: React.FC<{ isLogged: boolean }> = (props) => (
  <MenuList>
    {NavigationLinks.filter((link) => {
      if (!link.authProtected && link.hideForUser && !props.isLogged) return link
      else if (!props.isLogged && !link.hideForUser && !link.authProtected) return link
      else if (props.isLogged && link.authProtected) return link
    }).map((link, index) => (
      <Link href={link.route} key={index}>
        <MenuItem> {link.name}</MenuItem>
      </Link>
    ))}
    {props.children}
  </MenuList>
)
