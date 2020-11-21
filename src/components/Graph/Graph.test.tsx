// Library dependencies
import { render } from '@testing-library/react';
import React from 'react';

// Local dependencies
import { Graph } from '.';

// SASS module
import styles from './Graph.module.scss';

describe(Graph.name, () => {
    it('renders graph', () => {
        // Arrange
        const numberOfParticles = 10;

        // Act
        const { container } = render(<Graph numberOfParticles={numberOfParticles}/>);

        // Assert
        const graph = container.querySelector(`.${styles.particlesWrapper}`);
        expect(graph).toBeInTheDocument();
    });
});