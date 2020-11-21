/* istanbul ignore file */
// Local dependencies
import { FormFieldType } from '.';

/**
 * State of the form field
 */
export interface IFormFieldState {
    /**
     * Generated id of the form field which a label can reference to
     */
    fieldId: string;

    /**
     * Current form field type
     * 
     * The requested form field type (in the properties) can change based on the password peek function
     * This state variable holds the current type of the input while the props.type remains unchanged
     */
    currentFormFieldType: FormFieldType;
}