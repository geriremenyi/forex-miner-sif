/* istanbul ignore file */
import { ButtonDecoration } from '.';

/**
 * Button component properties
 */
export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * How to decorate the button
     */
    decoration?: ButtonDecoration;
}