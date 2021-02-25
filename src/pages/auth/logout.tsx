import { useRouter } from "next/dist/client/router"
import React from "react"
import { LogoutAction } from "../../actions/AuthActions"
import { isLogged } from "../../utils/CheckAuth"

const logout: React.FC = () => {
  const router = useRouter()
  !isLogged && router.push("/")

  React.useEffect(() => {
    ;(async () => {
      await LogoutAction(() => router.push("/"))
    })()
  }, [])

  return <> </>
}

export default logout
