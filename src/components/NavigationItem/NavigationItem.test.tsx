// Library dependencies
import { render } from '@testing-library/react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import React from 'react';

// Local dependencies
import { NavigationItem } from '.';
import { history, store } from '~store';

describe(NavigationItem.name, () => {
    it('renders link correctly', () => {
        // Arrange
        const action = 'https://forex-miner.com';

        // Act
        const { container } = render(<Provider store={store}><ConnectedRouter history={history}><NavigationItem action={action} /></ConnectedRouter></Provider>);

        // Assert
        const navigationItem = container.querySelector('a');
        expect(navigationItem).toBeInTheDocument();
    });

    it('renders button correctly', () => {
        // Arrange
        const action = () => {
            // Do nothing
        };

        // Act
        const { container } = render(<Provider store={store}><ConnectedRouter history={history}><NavigationItem action={action} /></ConnectedRouter></Provider>);

        // Assert
        const navigationItem = container.querySelector('button');
        expect(navigationItem).toBeInTheDocument();
    });
});