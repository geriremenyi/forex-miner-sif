// Local dependencies
import { IConnection } from '~api/contracts/connection';

/**
 * Dashboard page component props
 */
export interface IDashboardPageProps {
    /**
     * Connections for the user containing all info 
     * for the dashboard page to display
     */
    connections: IConnection[];
}