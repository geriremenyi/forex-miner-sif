import { IUser } from '.';

export interface ILoggedInUser extends IUser {
  token: string
}
