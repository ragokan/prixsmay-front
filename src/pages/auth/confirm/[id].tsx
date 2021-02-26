import { NextPage } from "next"
import { useRouter } from "next/router"
import React from "react"
import { ConfirmAccountAction } from "../../../actions/AuthActions"
import { RouterType } from "../../../types/RouterType"

const ConfirmAccount: NextPage = () => {
  const router: RouterType = useRouter()
  React.useEffect(() => {
    ;(async () => {
      await ConfirmAccountAction(router.query.id, () => router.push("/"))
    })()
  }, [router.query.id])

  return <div></div>
}

export default ConfirmAccount
