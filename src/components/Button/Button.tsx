// Library dependencies
import React from 'react';

// Local dependencies
import { ButtonDecoration, IButtonProps } from './';

// SASS module
import styles from './Button.module.scss';

/**
 * Button react component implementation
 * Basically a wrapper around the button react component.
 */
export class Button extends React.Component<IButtonProps> {

	/**
	 * Instance initialization
	 * 
	 * @param props Props of the button
	 */
	constructor(props: IButtonProps) {
		super(props);

		this.decorationToCssClass = this.decorationToCssClass.bind(this);
	}

	/**
	 * The render function is responsible for how to render the button component.
	 * Renders a react button component with it's children.
	 */
	public render(): React.ReactNode {
		const {children, className, decoration, ...props} = this.props;

		return (
			<button {...props} className={`${className ?? ''} ${this.decorationToCssClass(decoration)}`}>
				{children}
			</button>
		);
	}

	/**
	 * Convert the button decoration property to a css class.
	 */
	private decorationToCssClass(decoration?: ButtonDecoration) {
		switch(decoration) {
			case ButtonDecoration.Primary:
			default:
				return styles.primary;
		}
	}
}