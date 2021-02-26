import { useRouter } from "next/dist/client/router"
import React from "react"
import { UserState } from "../../../state/UserState"

export const UserProtect = () => {
  const isLogged = UserState((state) => state.isLogged)
  const router = useRouter()
  isLogged && router.push("/")
  React.useEffect(() => {
    isLogged && router.push("/")
  }, [isLogged])
}
