import { ReactElement } from 'react';
import { IconType } from 'react-icons/lib';

/**
 * Dashboard card component's properties
 */
export interface IDashboardCardProps {
    /**
     * Card title 
     */
    title: string

    /**
     * Value of the dashboard card
     */
    value?: number

    /**
     * Description
     */
    description: string
    
    /**
     * Icon for on the card
     */
    icon: ReactElement<IconType>;
}