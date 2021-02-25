import create, { State, PartialState } from "zustand"
import { devtools } from "zustand/middleware"
import { AlertType } from "../types/AlertType"

interface IAlertState extends State {
  alerts: AlertType[]
}

export const AlertState = create<IAlertState>(devtools(() => ({ alerts: [] })))

export const setAlertState = (partial: PartialState<IAlertState>) => AlertState.setState(partial)
export const getAlertState = AlertState.getState
export const subAlertState = AlertState.subscribe
