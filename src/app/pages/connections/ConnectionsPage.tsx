import React from 'react';

import { IConnectionsPageProps } from '.';
import { Card } from '~components/Card';
import { store } from '~store';
import { connectionActions } from '~app/redux/actions/connection';

import styles from './ConnectionsPage.module.scss';
import { IoMdAddCircle } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import { AddConnectionStatus } from '~app/redux/states/connection';
import { FormField, FormFieldType } from '~components/FormField';
import { IConnectionsPageState } from './IConnectionsPageState';
import { FaUserSecret } from 'react-icons/fa';
import { BsCursorText } from 'react-icons/bs';
import { Button, ButtonDecoration } from '~components/Button';
import { MdPermIdentity } from 'react-icons/md';

export class ConnectionsPage extends React.Component<IConnectionsPageProps, IConnectionsPageState> {

    public constructor(props: IConnectionsPageProps) {
        // Init props
        super(props);

        // Init state
        this.state = {
            name: '',
            broker: 'Oanda',
            secret: '',
            externalAccountId: ''
        };

        // Dispatch connections async action
        store.dispatch(connectionActions.getConnectionsStart());

        // Init functions
        this.triggerAdd = this.triggerAdd.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onSecretChange = this.onSecretChange.bind(this);
        this.onAccountIdChange = this.onAccountIdChange.bind(this);
        this.addConnection = this.addConnection.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <>
                <div className={`container-fluid ${styles.connections}`} >
                    <div className={'row'}>
                        <div className='col-xl-3 col-lg-6 padding-md'>
                            { this.props.connections?.length === 0 &&
                                <Card>
                                    { this.getAddButtonIfRelevant() }
                                    { this.getTestIfRelevant() }
                                </Card>
                            }
                            { this.props.connections?.length > 0 &&
                                <Card>
                                    <div className={styles.existingBroker}>
                                        <img 
                                            alt='logo' 
                                            className={`${styles.brokerIcon}`} 
                                            src={`${process.env.PUBLIC_URL}/icon/logo_${this.props.connections?.[0]?.broker.toLowerCase()}.png`} 
                                        />
                                        <span className={`padding-top-xs ${styles.brokerName}`}>{this.props.connections?.[0]?.broker}</span>
                                        <span className={'padding-top-xs padding-bottom-md'}>{this.props.connections?.[0]?.type}</span>
                                    </div>
                                </Card>
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }

    private getAddButtonIfRelevant(): React.ReactElement | undefined {
        return (
            this.props.addConnection === AddConnectionStatus.NotStarted ?
                (<button className={styles.addBrokerButton} onClick={this.triggerAdd}>
                    <div className={'padding-md'}>
                        <IconContext.Provider value={{ size: styles.iconSizeExtraLarge }}>
                            <IoMdAddCircle />
                        </IconContext.Provider>
                    </div>
                </button>): undefined
        );
    }

    private getTestIfRelevant(): React.ReactElement | undefined {
        return (
            this.props.addConnection === AddConnectionStatus.Started ?
                (<div className={`${styles.addConnection}`}>
                    <form onSubmit={this.addConnection}>
                        <div className={`${styles.brokerSelector}`}> 
                            <img alt='logo' className={`${styles.brokerSelectorIcon}`} src={`${process.env.PUBLIC_URL}/icon/logo_oanda.png`} />
                        </div>
                        <div className={`${styles.textualInputs}`}>
                            <FormField
                                type={FormFieldType.Text}
                                label='Connection name'
                                value={this.state.name}
                                onChange={this.onNameChange}
                                icon={<BsCursorText />}
                                required
                            />
                            <FormField
                                type={FormFieldType.Password}
                                label='Connection secret'
                                value={this.state.secret}
                                onChange={this.onSecretChange}
                                icon={<FaUserSecret />}
                                required
                            />
                            <FormField
                                type={FormFieldType.Text}
                                label='Account id'
                                value={this.state.secret}
                                onChange={this.onAccountIdChange}
                                icon={<MdPermIdentity />}
                                required
                            />
                        </div>
                        <div className={'padding-md'}>
                            <Button decoration={ButtonDecoration.Primary} type="submit">Add</Button>
                        </div>
                    </form>
                </div>): undefined
        );
    }

    private triggerAdd() {
        store.dispatch(connectionActions.addConnectionTriggered());
    }

    private onNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            name: event.currentTarget.value
        });
    }

    private onSecretChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            secret: event.currentTarget.value
        });
    }

    private onAccountIdChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            externalAccountId: event.currentTarget.value
        });
    }

    private addConnection(event: React.FormEvent) {
        store.dispatch(connectionActions.addConnectionStart({
            name: this.state.name,
            broker: this.state.broker,
            secret: this.state.secret,
            externalAccountId: this.state.externalAccountId,
        }));

        event.preventDefault();
    }
}