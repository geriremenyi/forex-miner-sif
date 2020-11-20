// Library dependencies
import { render } from '@testing-library/react';
import React from 'react';

// Local dependencies
import { Card } from '.';

// SASS module
import styles from './Card.module.scss';

describe(Card.name, () => {

    it('renders empty card correctly', () => {
        // Arrange

        // Act
        const { container } = render(<Card></Card>);

        // Assert
        const card = container.querySelector(`.${styles.card}`);
        expect(card).toBeInTheDocument();
    });

    it('renders title correctly', () => {
        // Arrange
        const title = 'This is the card title';

        // Act
        const { container } = render(<Card title={title}></Card>);

        // Assert
        const titleBlock = container.querySelector(`.${styles.cardTitle}`);
        expect(titleBlock).toBeInTheDocument();
        expect(titleBlock.textContent).toBe(title);
    });

    it('renders children correctly', () => {
        // Arrange
        const childrenText = 'This is the children';
        const children = <div>{childrenText}</div>;

        // Act
        const { container } = render(<Card>{children}</Card>);

        // Assert
        const card = container.querySelector(`.${styles.cardBody}`);
        expect(card).toBeInTheDocument();
        expect(card.textContent).toBe(childrenText);
    });

});