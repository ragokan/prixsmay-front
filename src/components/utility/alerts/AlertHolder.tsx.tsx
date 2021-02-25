import { Box } from "@chakra-ui/react"
import React from "react"
import { AlertState } from "../../../state/AlertState"
import { AlertObject } from "./AlertObject"

export const AlertHolder: React.FC = () => {
  const alerts = AlertState((state) => state.alerts)
  return (
    <Box mt={8} mx="auto" maxW={1100} w="95%">
      {alerts.map((alert) => (
        <AlertObject key={alert.id} alert={alert} />
      ))}
    </Box>
  )
}
