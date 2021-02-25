import { setUserState } from "../state/UserState"
import { LoginBodyType } from "../types/RequestBodyTypes"
import { IUserResponse } from "../types/ResponseTypes"
import { apios } from "../utils/Apios"

export const LoginAction = async (user: LoginBodyType, callback?: Function) => {
  const { data } = await apios.post<IUserResponse>("/auth/login", user)

  setUserState({ user: data.user, isLogged: true })

  callback && callback()
}
