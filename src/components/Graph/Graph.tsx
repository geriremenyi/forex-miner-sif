// Library dependencies
import React from 'react';
import Particles from 'react-particles-js';

// Local dependencies
import { IGraphProps } from '.';

// SASS module
import styles from './Graph.module.scss';

/**
 * Graph component.
 * 
 * This component is using partices as an interactive graph background component.
 */
export class Graph extends React.Component<IGraphProps> {

    /**
	 * Render component
	 * 
	 * @returns The rendered react node
	 */
    public render(): React.ReactNode {
        return (
            <div className={styles.graphWrapper}>
                <Particles width='100%' height='100%' className={styles.particlesWrapper} params={{
                    particles: {
                        number: {
                            value: this.props.numberOfParticles,
                            density: {
                                enable: true,
                                value_area: 500
                            }
                        },
                        color: {
                            value: styles.particlesColor
                        },
                        lineLinked: {
                            color: styles.particlesColor
                        }
                    }
                }}/>
                <div className={styles.childrenWrapper}>{ this.props.children ? this.props.children : '' }</div>
            </div>
        );
    }
}