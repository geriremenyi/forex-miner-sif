import { IUser } from '~api/models/user';

/**
 * Login state slice in the global store
 */
export interface ILoginState {
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
