import { Button } from "@chakra-ui/react"
import { NavigationLinks } from "./NavigationLinks"

export const LinksForMobile = () => (
  <>
    {NavigationLinks.map((link, index) => (
      <Button variant="link" color="current" key={index}>
        {link.name}
      </Button>
    ))}
  </>
)
