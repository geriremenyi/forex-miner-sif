import { IUser } from '~app/user/shared/types';

export interface ILoginState {
  isUserLoggedIn: boolean
  loggedInUser?: IUser
}
