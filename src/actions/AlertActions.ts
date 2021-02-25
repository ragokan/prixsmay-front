import { BackgroundProps } from "@chakra-ui/react"
import { setAlertState } from "../state/AlertState"
import { AlertType } from "../types/AlertType"
import { R4 } from "../utils/RandomValue"

export const AddAlertAction = (message: string, color: "green.400" | "blue.400" | "red", timeout: number = 5000) => {
  const alert: AlertType = {
    id: R4(),
    message,
    color,
  }
  setAlertState((prevState) => ({ alerts: [alert, ...prevState.alerts] }))
  setTimeout(() => RemoveAlertAction(alert.id), timeout)
}

export const RemoveAlertAction = (id: string) =>
  setAlertState((prevState) => ({ alerts: prevState.alerts.filter((alert) => alert.id !== id) }))
