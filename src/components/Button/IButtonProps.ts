/* istanbul ignore file */
import { ButtonType } from '.';

/**
 * Button component properties
 */
export interface IButtonProps {
    /**
     * Textual label on the button
     */
    label: string;

    /**
     * Function to run on click
     */
    onClick: () => void;

    /**
     * Type of the button
     */
    type?: ButtonType;
}