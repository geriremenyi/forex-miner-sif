// Library dependencies
import { render } from '@testing-library/react';
import React from 'react';
import { MdLock } from 'react-icons/md';

// Local dependencies
import { DashboardCard } from '.';

// SASS module
import styles from './DashboardCard.module.scss';

describe(DashboardCard.name, () => {
    it('renders without value', () => {
        // Arrange
        const title = 'Card title';
        const description = 'Card description';
        const icon = <MdLock />;

        // Act
        const { container } = render(<DashboardCard title={title} description={description} icon={icon}/>);

        // Assert
        const dashboardCard = container.querySelector(`.${styles.dashboardCard}`);
        expect(dashboardCard).toBeInTheDocument();
        const dashboardCardIcon = dashboardCard.querySelector(`.${styles.dashboardCardIcon}`);
        expect(dashboardCardIcon).toBeInTheDocument();
        const dashboardCardTitle = dashboardCard.querySelector(`.${styles.dashboardCardTitle}`);
        expect(dashboardCardTitle).toBeInTheDocument();
        expect(dashboardCardTitle.textContent).toBe(title);
        const dashboardCardValue = dashboardCard.querySelector(`.${styles.dashboardCardValue}`);
        expect(dashboardCardValue).toBeInTheDocument();
        expect(dashboardCardValue.textContent).toBe('-');
        const dashboardCardDivider = dashboardCard.querySelector(`.${styles.dashboardCardDivider}`);
        expect(dashboardCardDivider).toBeInTheDocument();
        const dashboardCardDescription = dashboardCard.querySelector(`.${styles.dashboardCardDescription}`);
        expect(dashboardCardDescription).toBeInTheDocument();
        expect(dashboardCardDescription.textContent).toBe(description);
    });

    it('renders with value', () => {
        // Arrange
        const title = 'Card title';
        const description = 'Card description';
        const value = 1234;
        const icon = <MdLock />;

        // Act
        const { container } = render(<DashboardCard title={title} description={description} value={value} icon={icon}/>);

        // Assert
        const dashboardCard = container.querySelector(`.${styles.dashboardCard}`);
        expect(dashboardCard).toBeInTheDocument();
        const dashboardCardIcon = dashboardCard.querySelector(`.${styles.dashboardCardIcon}`);
        expect(dashboardCardIcon).toBeInTheDocument();
        const dashboardCardTitle = dashboardCard.querySelector(`.${styles.dashboardCardTitle}`);
        expect(dashboardCardTitle).toBeInTheDocument();
        expect(dashboardCardTitle.textContent).toBe(title);
        const dashboardCardValue = dashboardCard.querySelector(`.${styles.dashboardCardValue}`);
        expect(dashboardCardValue).toBeInTheDocument();
        expect(dashboardCardValue.textContent).toBe(value.toString());
        const dashboardCardDivider = dashboardCard.querySelector(`.${styles.dashboardCardDivider}`);
        expect(dashboardCardDivider).toBeInTheDocument();
        const dashboardCardDescription = dashboardCard.querySelector(`.${styles.dashboardCardDescription}`);
        expect(dashboardCardDescription).toBeInTheDocument();
        expect(dashboardCardDescription.textContent).toBe(description);
    });
});