/**
 * State of the register form
 */
export interface IRegisterFormState {
    /**
     * Value of the first name field
     */
    firstName: string;

    /**
     * Value of the last name field
     */
    lastName: string;

    /**
     * Value of the email
     */
    email: string;

    /**
     * Value of the password
     */
    password: string;
}