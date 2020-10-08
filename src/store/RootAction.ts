import { loginActions } from "~app/user/login/redux";

export type RootAction = 
    | ReturnType<typeof loginActions.loginStart>
    | ReturnType<typeof loginActions.loginSuccess>
    | ReturnType<typeof loginActions.loginFailed>