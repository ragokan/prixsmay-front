import { getUserState } from "../state/UserState"

export const isLogged = getUserState().isLogged
