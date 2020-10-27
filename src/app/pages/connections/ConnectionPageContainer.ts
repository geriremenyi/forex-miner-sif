// Library dependencies
import { connect } from 'react-redux';

// Local dependencies
import { IRootState } from '~store';
import { IConnectionsPageProps, ConnectionsPage } from '.';

/**
 * Map global state to trade signals page props 
 * 
 * @param state Global state
 */
const mapStateToProps = (state: IRootState): IConnectionsPageProps => ({
    connections: state.connections.connections,
    addConnection: state.connections.addConnection,
});

// Container
export const ConnectionsPageContainer = connect(mapStateToProps)(ConnectionsPage);