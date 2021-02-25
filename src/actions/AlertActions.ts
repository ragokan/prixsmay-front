import { BackgroundProps } from "@chakra-ui/react"
import { setAlertState } from "../store/AlertStore"
import { AlertType } from "../types/AlertType"
import { R4 } from "../utils/RandomValue"

export const AddAlert = (message: string, color: BackgroundProps["bg"], timeout: number = 5000) => {
  const alert: AlertType = {
    id: R4(),
    message,
    color,
  }
  setAlertState((prevState) => ({ alerts: [alert, ...prevState.alerts] }))
  setTimeout(() => RemoveAlert(alert.id), timeout)
}

const RemoveAlert = (id: string) =>
  setAlertState((prevState) => ({ alerts: prevState.alerts.filter((alert) => alert.id !== id) }))
