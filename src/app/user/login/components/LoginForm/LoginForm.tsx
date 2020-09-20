import React from 'react';
import { MdEmail, MdLock } from 'react-icons/md';

import { FormField, FormFieldType } from '~components/FormField';

import { ILoginFormProps } from '.';

import { isLoginFormActive } from '../../shared/functions';
import { Button } from '~components/Button';
import { store } from '~store';

import styles from './LoginForm.module.scss';
import { loginActions } from '../../redux';

export class LoginForm extends React.Component<ILoginFormProps> {

    public constructor(props: ILoginFormProps) {
        super(props);

        this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <div className={`container-fixed ${styles.loginContainer} ${!isLoginFormActive(this.props.activeForm) ? styles.hiddenContainer : ''}`}>
                <div className={`row row-center ${styles.loginRow}`}>
                    <div className='col-lg-8'>
                        <div className={`${styles.loginWrapperContainer} ${!isLoginFormActive(this.props.activeForm) ? styles.slideOut : ''}`} >
                            <div className={styles.loginWrapper}>
                                <h1>Login To Yout Account</h1>
                                <form onSubmit={this.onLoginFormSubmit}>
                                    <FormField type={FormFieldType.Email} label='Email' icon={<MdEmail />}/>
                                    <FormField type={FormFieldType.Password} label='Password' icon={<MdLock />}/>
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

    private onLoginFormSubmit(event: React.FormEvent) {        
        // Send the login data
        store.dispatch(loginActions.loginStart({
            emailAddress: "test@test.com",
            password: "testIng9"
        }));

        event.preventDefault();
    }
}