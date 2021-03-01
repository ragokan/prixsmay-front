import { IUserResponse } from "../types/ResponseTypes"
import { apios } from "../utils/Apios"

export const GetProfileAction = async (username: string) => {
  const { data } = await apios.get<IUserResponse>(`/profile/${username}`)

  return data.user
}
