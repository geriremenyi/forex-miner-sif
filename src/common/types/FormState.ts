/**
 * Different states a form can be in
 */
export enum FormState {
    /**
     * The form hasn't been touched
     */
    Clean,

    /**
     * The form has been touched
     */
    Dirty,

    /**
     * The form is in a loading state, fetching data
     */
    Loading,

    /**
     * The form was submitted successfully
     */
    Success,

    /**
     * The form contains some errors
     */
    Error
}