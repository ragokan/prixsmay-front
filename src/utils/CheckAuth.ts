import { getUserState } from "../state/UserState"

export const isLogged = (): boolean => getUserState().isLogged
