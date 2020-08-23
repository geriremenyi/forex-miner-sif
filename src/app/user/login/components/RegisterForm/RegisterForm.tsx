import React from 'react';
import { MdEmail } from 'react-icons/md';

import { FormField, FormFieldType } from '~components/FormField';

import { IRegisterFormProps } from '.';

import styles from './RegisterForm.module.scss';
import { isRegisterFormActive } from '~app/user/login/shared/functions';
import { Button } from '~components/Button';

export class RegisterForm extends React.Component<IRegisterFormProps> {

    public render(): React.ReactNode {
        return (
            <div className={`container-fixed ${styles.registerContainer} ${!isRegisterFormActive(this.props.activeForm) ? styles.hiddenContainer : ''}`}>
                <div className={`row row-center ${styles.registerRow}`}>
                    <div className='col-lg-8'>
                        <div className={`${styles.registerWrapperContainer} ${!isRegisterFormActive(this.props.activeForm) ? styles.slideOut : ''}`} >
                            <div className={styles.registerWrapper}>
                                <h1>Create Free Account</h1>
                                <div className='container-fluid'>
                                    <div className='row row-center'>
                                        <div className={'col-lg-6'}>
                                            <FormField type={FormFieldType.Email} label='Email' icon={<MdEmail />}/>
                                        </div>
                                        <div className={'col-lg-6'}>
                                            <FormField type={FormFieldType.Email} label='Email' icon={<MdEmail />}/>
                                        </div>
                                    </div>
                                    <div className='row row-center'>
                                        <div className={'col-lg-6'}>
                                            <FormField type={FormFieldType.Email} label='Email' icon={<MdEmail />}/>
                                        </div>
                                        <div className={'col-lg-6'}>
                                            <FormField type={FormFieldType.Email} label='Email' icon={<MdEmail />}/>
                                        </div>
                                    </div>
                                    <div className='row row-center'>
                                        <div className={'col-lg-12'}>
                                            <Button>Register</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}