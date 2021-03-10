import axios, { AxiosError, AxiosResponse } from "axios";
import { AddAlertAction } from "../actions/AlertActions";
import { setLoading } from "../state/LoadingState";
import { IError } from "../types/ErrorType";
import { IResponse } from "../types/ResponseTypes";

const apios = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apios.interceptors.request.use((config) => {
  setLoading(true);
  return config;
});

apios.interceptors.response.use(
  (response: AxiosResponse<IResponse>) => {
    setLoading(false);
    if (!response.data.success) console.log(response.data.message);
    return response;
  },
  async (error: AxiosError<IError>) => {
    console.log(error?.response?.data?.message || "Err");
    AddAlertAction(error?.response?.data?.message || "Server Error!", "red");
    throw new axios.Cancel("Error happened!");
  }
);

export { apios };
