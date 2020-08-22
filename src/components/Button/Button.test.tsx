// Library dependencies
import { render } from '@testing-library/react';
import React from 'react';

// Local dependencies
import { Button, ButtonDecoration } from '.';

// SASS module
import styles from './Button.module.scss';

describe(Button.name, () => {

	it('renders the children text correctly', () => {
		/////////////
		// Arrange //
		/////////////
		const label = 'This is a button test';

		/////////
		// Act //
		/////////
		const { container } = render(<Button>{label}</Button>);

		////////////
		// Assert //
		////////////
		const button = container.querySelector('button');
		expect(button).toBeInTheDocument();
		expect(button.textContent).toBe(label);
	});

	it('renders the CSS class', () => {
		/////////////
		// Arrange //
		/////////////
		const className = 'this-is-a-css-class';

		/////////
		// Act //
		/////////
		const { container } = render(<Button className={className} />);

		////////////
		// Assert //
		////////////
		const button = container.querySelector('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(className);
	});

	it('renders a primary button when no decoration given', () => {
		/////////////
		// Arrange //
		/////////////

		/////////
		// Act //
		/////////
		const { container } = render(<Button />);

		////////////
		// Assert //
		////////////
		const button = container.querySelector('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(styles.primary);
	});

	it('renders the primary button when primary decoration given', () => {
		/////////////
		// Arrange //
		/////////////

		/////////
		// Act //
		/////////
		const { container } = render(<Button decoration={ButtonDecoration.Primary}/>);

		////////////
		// Assert //
		////////////
		const button = container.querySelector('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(styles.primary);
	});

	it('renders the given classes and the decoration class as well', () => {
		/////////////
		// Arrange //
		/////////////
		const className = 'this-is-a-css-class';

		/////////
		// Act //
		/////////
		const { container } = render(<Button className={className} decoration={ButtonDecoration.Primary}/>);

		////////////
		// Assert //
		////////////
		const button = container.querySelector('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(className);
		expect(button).toHaveClass(styles.primary);
	});

});