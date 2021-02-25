import { setUserState } from "../state/UserState"
import { LoginBodyType } from "../types/RequestBodyTypes"
import { ICheckAuthResponse, IUserResponse } from "../types/ResponseTypes"
import { apios } from "../utils/Apios"

export const LoginAction = async (user: LoginBodyType, callback?: Function) => {
  const { data } = await apios.post<IUserResponse>("/auth/login", user)

  setUserState({ user: data.user, isLogged: true })

  callback && callback()
}

export const LogoutAction = async (callback?: Function) => {
  const { data } = await apios.post<IUserResponse>("/auth/logout")
  setUserState({ user: null, isLogged: false })
  callback && data.success && callback()
}

export const CheckAuthAction = async () => {
  const { data } = await apios.get<ICheckAuthResponse>("/auth/check")
  data.isLogged && setUserState({ isLogged: true })
}

export const FetchUserAction = async () => {
  const { data } = await apios.get<IUserResponse>("/user")
  setUserState({ isLogged: true, user: data.user })
}
