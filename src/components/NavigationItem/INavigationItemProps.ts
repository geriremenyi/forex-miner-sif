import { ReactElement } from 'react';
import { IconType } from 'react-icons/lib';

/**
 * Navigation item component's properties
 */
export interface INavigationItemProps {
    /**
     * Text of the navigation item 
     */
    text?: string

    /**
     * Action on navigation item click
     * Either a function or a link (string)
     */
    action: string | (() => void) 

    /**
     * Icon for the navigation item
     */
    icon?: ReactElement<IconType>;

    /**
     * Is the navigation item active
     */
    isActive?: boolean;
}