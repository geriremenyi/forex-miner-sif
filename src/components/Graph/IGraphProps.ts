/* istanbul ignore file */
import { ReactNode } from 'react';

/**
 * Graph properties
 */
export interface IGraphProps {
    /**
     * Number of particles
     */
    numberOfParticles: number;

    /**
     * Children components of the graph
     */
    children?: ReactNode;
}