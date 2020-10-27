/* istanbul ignore file */
import { ReactElement } from 'react';
import { IconType } from 'react-icons';

import { FormFieldType } from '.';

/**
 * Form field props
 */
export interface IFormFieldProps {
    /**
     * Type of the form field (a.k.a input type)
     */
    type: FormFieldType;

    /**
     * Value of the field 
     */
    value: string;

    /**
     * Handle form field change
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * Label for the input
     */
    label?: string;

    /**
     * Is the field required
     */
    required?: boolean;

    /**
     * Regex pattern
     */
    pattern?: string;

    /**
     * Error message to show
     */
    errorMessage?: string

    /**
     * Icon for the input
     */
    icon?: ReactElement<IconType>;
}