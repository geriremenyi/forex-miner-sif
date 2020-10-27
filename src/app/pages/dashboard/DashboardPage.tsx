import React from 'react';
import { loginActions } from '~app/user/login/redux';
import { store } from '~store';

import { DashboardCard } from '~components/DashboardCard';
import { Card } from '~components/Card';

import { IDashboardPageProps } from '.';
import { FaBoxOpen, FaMoneyBill } from 'react-icons/fa';
import { BsArrowsAngleContract } from 'react-icons/bs';
import { RiCalendarEventLine } from 'react-icons/ri';

// SASS module
import styles from './Dashboard.module.scss';
import { connectionActions } from '~app/redux/actions/connection/connectionsActions';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

export class DashboardPage extends React.Component<IDashboardPageProps> {

    public constructor(props: IDashboardPageProps) {
        // Init props
        super(props);

        // Dispatch dashboard get connections action
        store.dispatch(connectionActions.getConnectionsStart());

        // Init functions
        this.logout = this.logout.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <>
                <div className={`container-fluid ${styles.dashboard}`} >
                    <div className={'row'}>
                        <div className='col-xl-3 col-lg-6 padding-md'>
                            <DashboardCard 
                                title='Balance' 
                                value={this.props.connections?.[0]?.balance} 
                                description='Current balance of your account' 
                                icon={<FaMoneyBill />}
                            />
                        </div>
                        <div className='col-xl-3 col-lg-6 padding-md'>
                            <DashboardCard 
                                title='Profit' 
                                value={this.props.connections?.[0]?.profitLoss}
                                description='Profit or loss made' 
                                icon={<RiCalendarEventLine />}
                            />
                        </div>
                        <div className='col-xl-3 col-lg-6 padding-md'>
                            <DashboardCard 
                                title='Open Trades' 
                                value={this.props.connections?.[0]?.openTrades.length} 
                                description='Currently open trades' 
                                icon={<FaBoxOpen />}
                            />
                        </div>
                        <div className='col-xl-3 col-lg-6 padding-md'>
                            <DashboardCard 
                                title='Brokers' 
                                value={this.props.connections?.length} 
                                description='The brokers you are connected to' 
                                icon={<BsArrowsAngleContract />}
                            />
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={`padding-md col-xs-12 ${styles.openTradesTable}`}>
                            <Card title='Open trades'>
                                <Table>
                                    <TableHead className={styles.themedHeader}>
                                        <TableRow>
                                            <TableCell className={styles.themedCol}>Time</TableCell>
                                            <TableCell className={styles.themedCol}>Id</TableCell>
                                            <TableCell className={styles.themedCol}>Instrument</TableCell>
                                            <TableCell className={styles.themedCol} align='right'>Price</TableCell>
                                            <TableCell className={styles.themedCol} align='right'>Units</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        { (this.props.connections && this.props.connections.length > 0) ?
                                        this.props.connections?.[0]?.openTrades.map(trade => (
                                        <TableRow key={trade.id}>
                                            <TableCell className={styles.themedCol}>{trade.openTime.toString()}</TableCell>
                                            <TableCell className={styles.themedCol}>{trade.id}</TableCell>
                                            <TableCell className={styles.themedCol}>{trade.instrument}</TableCell>
                                            <TableCell className={styles.themedCol} align='right'>{trade.price}</TableCell>
                                            <TableCell className={styles.themedCol} align='right'>{trade.currentUnits}</TableCell>
                                        </TableRow>
                                        )): undefined}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    private logout() {
        store.dispatch(loginActions.logout());
    }
}