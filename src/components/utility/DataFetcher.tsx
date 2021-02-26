import { CheckAuthAction, FetchUserAction } from "../../actions/AuthActions"
import { subUserState } from "../../state/UserState"
;(async () => {
  CheckAuthAction()
})()

subUserState((state) => {
  state.isLogged && !Boolean(state.user) && FetchUserAction()
})
