/**
 * Registration contract
 */
export interface IRegistration {
    /**
     * Email address of the user to register
     */
    email: string;

    /**
     * Firstname of the user to register
     */
    firstName: string;

    /**
     * Lastname of the user to register
     */
    lastName: string;

    /**
     * Password of the user to register
     */
    password: string;
}