import { BackgroundProps } from "@chakra-ui/react"

export type AlertType = {
  id: string
  color: BackgroundProps["bg"]
  message: string
}
