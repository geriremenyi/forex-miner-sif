// Library dependencies
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

// Local dependencies
import { INavigationItemProps } from './';

// SASS module
import styles from './NavigationItem.module.scss';

/**
 * A navigation item component to include in the navigation
 */
export class NavigationItem extends React.Component<INavigationItemProps> {

    /**
	 * Instance initialization
	 * 
	 * @param props Props of the navigation item
	 */
    constructor(props: INavigationItemProps) {
        super(props);
    }

    /**
	 * The render function is responsible to render the navigation item component.
	 * 
	 * @returns The rendered react node
	 */
    public render(): React.ReactNode {
        return this.getNavigationItem();
    }

    private getNavigationItem(): React.ReactNode {
        const navigationItem = (typeof this.props.action === 'string') ? 
            <Link 
                className={`padding-sm ${styles.navigationItem} ${this.props.isActive ? styles.active : ''}`} 
                to={this.props.action}>{this.getNavigationInnerContent()}
            </Link>
            : <a 
                className={`padding-sm ${styles.navigationItem} ${this.props.isActive ? styles.active : ''}`}
                onClick={this.props.action}>{this.getNavigationInnerContent()}
            </a>;

        return navigationItem;
    }

    private getNavigationInnerContent(): React.ReactNode {
        return (
            <div>
                { this.props.icon ?
                    (<div>
                        <IconContext.Provider value={{ size: styles.iconSizeSmall }}>
                            { this.props.icon }
                        </IconContext.Provider>
                    </div>) : undefined
                }
                { this.props.text ?
                    <span>{ this.props.text }</span>
                    : undefined
                }
            </div>
        );
    }
}