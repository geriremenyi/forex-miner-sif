import { IUser } from '~api/models/user';

export interface ILoginState {
  isUserLoggedIn: boolean
  loggedInUser?: IUser
}
