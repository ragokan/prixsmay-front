import axios, { AxiosError, AxiosResponse } from "axios"
import { IError } from "../types/ErrorType"
import { IResponse } from "../types/ResponseTypes"

const apios = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

apios.interceptors.request.use((config) => {
  // Maybe set loading true?
  return config
})

apios.interceptors.response.use(
  (response: AxiosResponse<IResponse>) => {
    // Maybe set loading false?
    return response
  },
  async (error: AxiosError<IError>) => {
    console.log(error.response.data.message)
    throw new axios.Cancel("Error happened!")
  }
)

export { apios }
