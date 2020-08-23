import React from 'react';
import { MdEmail, MdLock } from 'react-icons/md';

import { FormField, FormFieldType } from '~components/FormField';

import { ILoginFormProps } from '.';

import styles from './LoginForm.module.scss';
import { isLoginFormActive } from '../../shared/functions';
import { Button } from '~components/Button';

export class LoginForm extends React.Component<ILoginFormProps> {

    public constructor(props: ILoginFormProps) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <div className={`container-fixed ${styles.loginContainer} ${!isLoginFormActive(this.props.activeForm) ? styles.hiddenContainer : ''}`}>
                <div className={`row row-center ${styles.loginRow}`}>
                    <div className='col-lg-8'>
                        <div className={`${styles.loginWrapperContainer} ${!isLoginFormActive(this.props.activeForm) ? styles.slideOut : ''}`} >
                            <div className={styles.loginWrapper}>
                                <h1>Login To Yout Account</h1>
                                <FormField type={FormFieldType.Email} label='Email' icon={<MdEmail />}/>
                                <FormField type={FormFieldType.Password} label='Password' icon={<MdLock />}/>
                                <Button>Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}