import { Button } from "@chakra-ui/react"
import { NavigationLinks } from "./NavigationLinks"
import Link from "next/link"

export const LinksForMobile = () => (
  <>
    {NavigationLinks.map((link, index) => (
      <Link href={link.route} key={index}>
        <Button variant="link" color="current">
          {link.name}
        </Button>
      </Link>
    ))}
  </>
)
