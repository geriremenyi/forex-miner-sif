import React from 'react';

import { Button } from '~components/Button';
import { Graph } from '~components/Graph';
import { isLoginFormActive, isRegisterFormActive } from '~app/user/login/shared/functions';

import { ILoginRegisterSwitchProps } from '.';

import styles from './LoginRegisterSwitch.module.scss';

export class LoginRegisterSwitch extends React.Component<ILoginRegisterSwitchProps> {

    public constructor(props: ILoginRegisterSwitchProps) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <>
                <div className={`container-fixed ${styles.switchPanelContainer} ${isLoginFormActive(this.props.activeForm) ? styles.showLogin : ''} ${isRegisterFormActive(this.props.activeForm) ? styles.showRegister : ''} ${this.props.isColdLoad ? styles.coldLoad : ''}`}>
                    <Graph numberOfParticles={50} >
                        <div className={`row row-center ${styles.switchPanelRow}`}>
                            <div className={`${styles.switchWrapper} padding-xl`}>
                                <Button className={styles.fullWidthButton} onClick={this.props.onSwitchButtonClick}>{isLoginFormActive(this.props.activeForm) ? 'Sign Up' : 'Log In'}</Button>
                            </div>
                        </div>
                    </Graph>
                </div>
                <div className={`${styles.switchTextWrapperContainer} ${isLoginFormActive(this.props.activeForm) ? styles.showLogin : ''} ${isRegisterFormActive(this.props.activeForm) ? styles.showRegister : ''} ${this.props.isColdLoad ? styles.coldLoad : ''}`}>
                    <div className={`${styles.switchTextWrapper} ${styles.loginTextWrapper}`}>
                        <div className={`${styles.switchTextContentHideable} ${isLoginFormActive(this.props.activeForm) ? styles.switchTextContentHidden : ''}`}>
                            <h1>Have an account?</h1>
                            <p>Great news. Log in and continue to watch your account growing.</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.switchTextWrapperContainer} ${isLoginFormActive(this.props.activeForm) ? styles.showLogin : ''} ${isRegisterFormActive(this.props.activeForm) ? styles.showRegister : ''} ${this.props.isColdLoad ? styles.coldLoad : ''}`}>
                    <div className={`${styles.switchTextWrapper} ${styles.registerTextWrapper}`}>
                        <div className={`${styles.switchTextContentHideable} ${!isLoginFormActive(this.props.activeForm) ? styles.switchTextContentHidden : ''}`}>
                            <h1>New here?</h1>
                            <p>Sign up and discover the beautiful world of automated forex trading.</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}