// Library dependencies
import { connect } from 'react-redux';

// Local dependencies
import { IRootState } from '~store';
import { IDashboardPageProps, DashboardPage } from '.';

/**
 * Map global state to trade signals page props 
 * 
 * @param state Global state
 */
const mapStateToProps = (state: IRootState): IDashboardPageProps => ({
    connections: state.connections.connections,
});

// Container
export const DashboardPageContainer = connect(mapStateToProps)(DashboardPage);