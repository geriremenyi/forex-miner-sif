import { notificationActions } from "~app/notification";
import { loginActions } from "~app/user/login/redux";

export type RootAction = 
    | ReturnType<typeof loginActions.loginStart>
    | ReturnType<typeof loginActions.loginSuccess>
    | ReturnType<typeof loginActions.loginFailed>
    | ReturnType<typeof loginActions.registerStart>
    | ReturnType<typeof loginActions.registerSuccess>
    | ReturnType<typeof loginActions.registerFailed>
    | ReturnType<typeof notificationActions.add>
    | ReturnType<typeof notificationActions.remove>