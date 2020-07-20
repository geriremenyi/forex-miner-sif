/* istanbul ignore file */
import { ButtonDecoration } from '.';

/**
 * Button component properties
 */
export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * How to decorate the button
     */
    decoration?: ButtonDecoration;
}