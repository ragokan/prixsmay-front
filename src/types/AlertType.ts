import { BackgroundProps } from "@chakra-ui/react"

export type AlertType = {
  id: number
  color: BackgroundProps["bg"]
  message: string
  duration?: number
}
