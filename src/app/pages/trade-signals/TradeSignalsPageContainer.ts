// Library dependencies
import { connect } from 'react-redux';

// Local dependencies
import { IRootState } from '~store';
import { ITradeSignalsPageProps, TradeSignalsPage } from '.';

/**
 * Map global state to trade signals page props 
 * 
 * @param state Global state
 */
const mapStateToProps = (state: IRootState): ITradeSignalsPageProps => ({
    tradeSignals: state.tradeSignals.tradeSignals,
});

// Container
export const TradeSignalsPageContainer = connect(mapStateToProps)(TradeSignalsPage);