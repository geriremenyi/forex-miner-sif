import React from 'react';

import { ITradeSignalsPageProps } from '.';
import { Card } from '~components/Card';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { store } from '~store';
import { tradeSignalActions } from '~app/redux/actions/trade';

import styles from './TradeSignals.module.scss';

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
                <div className={`${styles.tradeSignals} container-fluid`} >
                    <div className={'row'}>
                        <div className='col-xs-12 padding-md'>
                            <Card title="Trade Signals">
                                <Table className={`${styles.tradeSignalsTable}`}>
                                    <TableHead className={styles.themedHeader}>
                                        <TableRow>
                                            <TableCell className={styles.themedCol}>Time</TableCell>
                                            <TableCell className={styles.themedCol}>Instrument</TableCell>
                                            <TableCell className={styles.themedCol}>Direction</TableCell>
                                            <TableCell className={styles.themedCol} align="right">Confidence</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.props.tradeSignals.map(signal => (
                                            <TableRow key={signal.confidence}>
                                                <TableCell className={styles.themedCol}>{signal.time.toString()}</TableCell>
                                                <TableCell className={styles.themedCol}>{signal.instrument}</TableCell>
                                                <TableCell className={styles.themedCol}>{signal.direction}</TableCell>
                                                <TableCell className={styles.themedCol} align="right">{signal.confidence}</TableCell>
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