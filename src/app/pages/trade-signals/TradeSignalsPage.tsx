import React from 'react';

import { ITradeSignalsPageProps } from '.';
import { Card } from '~components/Card';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { store } from '~store';
import { tradeSignalActions } from '~app/redux/actions/trade';

export class TradeSignalsPage extends React.Component<ITradeSignalsPageProps> {

    public constructor(props: ITradeSignalsPageProps) {
        // Init props
        super(props);

        // Dispatch trade signal get action
        store.dispatch(tradeSignalActions.getTradeSignalsStart());
    }

    public render(): React.ReactNode {
        return (
            <>
                <div className={'container-fluid'} >
                    <div className={'row'}>
                        <div className='col-xs-12 padding-md'>
                            <Card title="Trade Signals">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Time</TableCell>
                                            <TableCell>Instrument</TableCell>
                                            <TableCell>Direction</TableCell>
                                            <TableCell align="right">Confidence</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.props.tradeSignals.map(signal => (
                                            <TableRow key={signal.confidence}>
                                                <TableCell>{signal.time.toString()}</TableCell>
                                                <TableCell>{signal.instrument}</TableCell>
                                                <TableCell>{signal.direction}</TableCell>
                                                <TableCell align="right">{signal.confidence}</TableCell>
                                            </TableRow>        
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}