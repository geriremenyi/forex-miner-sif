// Library dependencies
import React from 'react';

// Local dependencies
import { ICardProps } from './';

// SASS module
import styles from './Card.module.scss';

/**
 * Card react component implementation
 */
export class Card extends React.Component<ICardProps> {
    /**
	 * The render function is responsible rendering the card component.
	 * 
	 * @returns The rendered react node
	 */
    public render(): React.ReactNode {

        return (
            <div className={`${styles.card}`}>
                { this.props.title ? 
                    <div className={`padding-top-lg padding-bottom-lg padding-left-md ${styles.cardTitle}`}>
                        <span>{this.props.title}</span>
                    </div> : undefined
                }
                { this.props.children ? 
                    <div className={`${styles.cardBody}`}>{this.props.children}</div> 
                    : undefined 
                }
            </div>
        );
    }
}