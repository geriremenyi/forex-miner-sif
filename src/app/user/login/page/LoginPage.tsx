import React from 'react';

import { ActiveForm } from '~app/user/login/shared/types';

import { store } from '~store';
import { push } from 'connected-react-router';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { LoginRegisterSwitch } from '../components/LoginRegisterSwitch/LoginRegisterSwitch';
import { ILoginPageProps } from './ILoginPageProps';

//import styles from './LoginPage.module.scss';

export class LoginPage extends React.Component<ILoginPageProps> {
	private renderCalls: number;

	public constructor(props: ILoginPageProps) {
		super(props);	
		this.renderCalls = 0;	
		this.handleSwitchButtonClick = this.handleSwitchButtonClick.bind(this);
	}

	public render(): React.ReactNode {
		this.renderCalls++;

		return (
			<>
				<LoginForm activeForm={this.props.activeForm} />
				<RegisterForm activeForm={this.props.activeForm} />
				<LoginRegisterSwitch activeForm={this.props.activeForm} onSwitchButtonClick={this.handleSwitchButtonClick} isColdLoad={this.renderCalls <= 1}/>
			</>
		);
	}

	private handleSwitchButtonClick() {
		switch(this.props.activeForm) {
			case ActiveForm.LoginForm:
				store.dispatch(push('/register'));
				break;
			case ActiveForm.RegisterForm:
				store.dispatch(push('/login'));
		}
	}
}
