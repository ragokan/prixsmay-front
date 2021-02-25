import create, { State, PartialState } from "zustand"
import { devtools } from "zustand/middleware"
import { IUser } from "../types/UserType"

interface IUserState extends State {
  user?: IUser
  isLogged: boolean
}

export const UserState = create<IUserState>(devtools(() => ({ user: null, isLogged: false })))

export const setUserState = (partial: PartialState<IUserState>) => UserState.setState(partial)
export const getUserState = UserState.getState
export const subUserState = UserState.subscribe
