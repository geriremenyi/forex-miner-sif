import { IUser } from '.';

export interface IAuthenticatedUser extends IUser {
  token: string
}
