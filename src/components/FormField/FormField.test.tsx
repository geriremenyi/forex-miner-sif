// Library dependencies
import { render } from '@testing-library/react';
import React from 'react';

// Local dependencies
import { FormField, FormFieldType } from '.';

// SASS module
import styles from './FormField.module.scss';

describe(FormField.name, () => {
    it('renders email field correctly', () => {
        // Arrange
        const value = 'email@email.com';

        // Act
        const { container } = render(<FormField type={FormFieldType.Email} value={value} />);

        // Assert
        const formField = container.querySelector(`.${styles.formFieldWrapper}`);
        expect(formField).toBeInTheDocument();
        const emailInput = formField.querySelector('input[type="email"]');
        expect(emailInput).toBeInTheDocument();
    });

    it('renders text field correctly', () => {
        // Arrange
        const value = 'Free text';

        // Act
        const { container } = render(<FormField type={FormFieldType.Text} value={value} />);

        // Assert
        const formField = container.querySelector(`.${styles.formFieldWrapper}`);
        expect(formField).toBeInTheDocument();
        const textInput = formField.querySelector('input[type="text"]');
        expect(textInput).toBeInTheDocument();
    });

    it('renders password field correctly', () => {
        // Arrange
        const value = 'Top Secret';

        // Act
        const { container } = render(<FormField type={FormFieldType.Password} value={value} />);

        // Assert
        const formField = container.querySelector(`.${styles.formFieldWrapper}`);
        expect(formField).toBeInTheDocument();
        const textInput = formField.querySelector('input[type="password"]');
        expect(textInput).toBeInTheDocument();
    });
});