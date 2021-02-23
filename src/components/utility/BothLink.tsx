import { Link, LinkProps } from "@chakra-ui/react"
import NextLink from "next/link"
import React from "react"

interface BothLinkProps extends LinkProps {
  href: string
}

export const BothLink: React.FC<BothLinkProps> = (props) => (
  <NextLink href={props.href}>
    <Link color="blue.500" {...props}>
      {props.children}
    </Link>
  </NextLink>
)
