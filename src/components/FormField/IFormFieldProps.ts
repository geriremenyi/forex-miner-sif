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
     * Label for the input
     */
    label?: string;

    /**
     * Icon for the input
     */
    icon?: ReactElement<IconType>;
}