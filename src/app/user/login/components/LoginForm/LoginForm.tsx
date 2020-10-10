import React from 'react';
import { MdEmail, MdLock } from 'react-icons/md';

import { FormField, FormFieldType } from '~components/FormField';

import { ILoginFormProps, ILoginFormState } from '.';

import { isLoginFormActive } from '../../shared/functions';
import { Button } from '~components/Button';
import { Notification } from '~components/Notification';
import { store } from '~store';

import styles from './LoginForm.module.scss';
import { loginActions } from '../../redux';

export class LoginForm extends React.Component<ILoginFormProps, ILoginFormState> {

    public constructor(props: ILoginFormProps) {
        // Init props
        super(props);

        // Init state
        this.state = {
            email: '',
            password: ''
        };

        // Init functions
        this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <div className={`container-fixed ${styles.loginContainer} ${!isLoginFormActive(this.props.activeForm) ? styles.hiddenContainer : ''}`}>
                <Notification />
                <div className={`row row-center ${styles.loginRow}`}>
                    <div className='col-lg-8'>
                        <div className={`${styles.loginWrapperContainer} ${!isLoginFormActive(this.props.activeForm) ? styles.slideOut : ''}`} >
                            <div className={styles.loginWrapper}>
                                <h1>Login To Yout Account</h1>
                                <form onSubmit={this.onLoginFormSubmit}>
                                    <FormField 
                                        type={FormFieldType.Email} 
                                        value={this.state.email}
                                        onChange={this.onEmailChange} 
                                        label='Email'
                                        required
                                        icon={<MdEmail />} />
                                    <FormField 
                                        type={FormFieldType.Password} 
                                        value={this.state.password} 
                                        onChange={this.onPasswordChange} 
                                        label='Password' 
                                        required
                                        icon={<MdLock />}/>
                                    <div className={styles.loginButtonWrapper}>
                                        <Button className={styles.loginButton} type="submit">Login</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private onEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            email: event.currentTarget.value
        });
    }

    private onPasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            password: event.currentTarget.value
        });
    }

    private onLoginFormSubmit(event: React.FormEvent) {  
        // TODO: do the checks
        
        // Dispatch login start action with login data
        store.dispatch(loginActions.loginStart({
            email: this.state.email,
            password: this.state.password
        }));

        // Block page reload and param population as get params
        event.preventDefault();
    }
}