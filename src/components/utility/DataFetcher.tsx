import React from "react"
import { CheckAuthAction, FetchUserAction } from "../../actions/AuthActions"
import { subUserState } from "../../state/UserState"

CheckAuthAction()

export const DataFetcher: React.FC = () => {
  subUserState((state) => {
    state.isLogged && !Boolean(state.user) && FetchUserAction()
  })

  return <></>
}
