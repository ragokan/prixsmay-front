import React from "react"
import HtmlHead from "next/head"

interface HeadProps {
  title?: string
}

export const Head: React.FC<HeadProps> = (props) => {
  return (
    <HtmlHead>
      <title>{props.title ? "Prixsmay - " + props.title : "Prixsmay"}</title>
      {props.children}
    </HtmlHead>
  )
}
