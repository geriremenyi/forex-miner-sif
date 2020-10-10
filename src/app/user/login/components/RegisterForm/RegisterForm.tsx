import React from 'react';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

import { FormField, FormFieldType } from '~components/FormField';

import { IRegisterFormProps, IRegisterFormState } from '.';

import styles from './RegisterForm.module.scss';
import { isRegisterFormActive } from '~app/user/login/shared/functions';
import { Button } from '~components/Button';

export class RegisterForm extends React.Component<IRegisterFormProps, IRegisterFormState> {

    public constructor(props: IRegisterFormProps) {
        // Init props
        super(props);

        // Init state
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        // Init functions
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRegisterFormSubmit = this.onRegisterFormSubmit.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <div className={`container-fixed ${styles.registerContainer} ${!isRegisterFormActive(this.props.activeForm) ? styles.hiddenContainer : ''}`}>
                <div className={`row row-center ${styles.registerRow}`}>
                    <div className='col-lg-8'>
                        <div className={`${styles.registerWrapperContainer} ${!isRegisterFormActive(this.props.activeForm) ? styles.slideOut : ''}`} >
                            <div className={styles.registerWrapper}>
                                <h1>Create Free Account</h1>
                                <div className='container-fluid'>
                                    <form onSubmit={this.onRegisterFormSubmit}>
                                        <div className='row row-center'>
                                            <div className={'col-lg-6'}>
                                                <FormField 
                                                    type={FormFieldType.Text} 
                                                    label='Firstname'
                                                    value={this.state.firstName}
                                                    onChange={this.onFirstNameChange}
                                                    icon={<MdPerson />}
                                                />
                                            </div>
                                            <div className={'col-lg-6'}>
                                                <FormField 
                                                    type={FormFieldType.Text}
                                                    value={this.state.lastName}
                                                    onChange={this.onLastNameChange}
                                                    label='Lastname' 
                                                    icon={<MdPerson />}
                                                />
                                            </div>
                                        </div>
                                        <div className='row row-center'>
                                            <div className={'col-lg-6'}>
                                                <FormField 
                                                    type={FormFieldType.Email}
                                                    value={this.state.email}
                                                    onChange={this.onEmailChange}
                                                    label='Email' 
                                                    icon={<MdEmail />
                                                }/>
                                            </div>
                                            <div className={'col-lg-6'}>
                                                <FormField 
                                                    type={FormFieldType.Password} 
                                                    value={this.state.password}
                                                    onChange={this.onPasswordChange}
                                                    label='Password' 
                                                    icon={<MdLock />}
                                                />
                                            </div>
                                        </div>
                                        <div className='row row-center'>
                                            <div className={'col-lg-12'}>
                                                <div className={styles.registerButtonWrapper}>
                                                    <Button className={styles.registerButton}>Register</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private onFirstNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            firstName: event.currentTarget.value
        });
    }

    private onLastNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            lastName: event.currentTarget.value
        });
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

    private onRegisterFormSubmit(event: React.FormEvent) {        
        // TODO
        console.log(this.state)
        event.preventDefault();
    }

}