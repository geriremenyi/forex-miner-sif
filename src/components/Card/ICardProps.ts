/* istanbul ignore file */
// LIbrary dependencies
import { ReactNode } from 'react';

/**
 * Card component's properties
 */
export interface ICardProps {
    /**
     * Title of the cards
     */
    title?: string;

    /**
     * Content of the cards
     */
    children?: ReactNode;
}