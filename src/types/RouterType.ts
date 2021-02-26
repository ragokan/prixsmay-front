import { NextRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"

export type RouterType = NextRouter & {
  query: ParsedUrlQuery & {
    id?: string
  }
}
