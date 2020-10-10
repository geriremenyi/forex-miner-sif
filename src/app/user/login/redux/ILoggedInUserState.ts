import { IUser } from '~api/contracts/user';

/**
 * Logged in user state slice in global state
 */
export interface ILoggedInUserState {
  /**
   * Is there a logged in user
   */
  isUserLoggedIn: boolean;

  /**
   * Logged in user details
   * 
   * Only available if the isUserLoggedIn is true
   */
  loggedInUser?: IUser;
}
