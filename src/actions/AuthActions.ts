import { setUserState } from "../state/UserState"
import { LoginBodyType } from "../types/RequestBodyTypes"
import { ICheckAuthResponse, IUserResponse } from "../types/ResponseTypes"
import { apios } from "../utils/Apios"

export const LoginAction = async (user: LoginBodyType, callback?: Function) => {
  const { data } = await apios.post<IUserResponse>("/auth/login", user)

  setUserState({ user: data.user, isLogged: true })

  callback && data.success && callback()
}

export const RegisterAction = async (user: LoginBodyType, callback?: Function) => {
  const { data } = await apios.post<IUserResponse>("/auth/register", user)

  callback && data.success && callback()
}

export const LogoutAction = async (callback?: Function) => {
  const { data } = await apios.post<IUserResponse>("/auth/logout")
  setUserState({ user: null, isLogged: false })
  callback && data.success && callback()
}

export const CheckAuthAction = async () => {
  const { data } = await apios.get<ICheckAuthResponse>("/auth/check")
  data.isLogged && setUserState({ isLogged: true })

  return data.isLogged
}

export const FetchUserAction = async () => {
  const { data } = await apios.get<IUserResponse>("/user")
  setUserState({ isLogged: true, user: data.user })
}

export const ConfirmAccountAction = async (token: string, onEnd?: Function) => {
  const { data } = await apios.post<IUserResponse>("/auth/confirmEmail", {
    token,
  })

  setUserState({ user: data.user, isLogged: true })

  onEnd && onEnd()
}
