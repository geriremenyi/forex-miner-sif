import { LoginPage } from './LoginPage';
import { connect } from 'react-redux';
import { ActiveForm } from '~app/user/login/shared/types';
import { IRootState } from '~store';
import { getRouterPath } from '~common/functions/router/getRouterPath';
import { ILoginPageProps } from './ILoginPageProps';

// Store state to props mapper
const mapStateToProps = (state: IRootState): ILoginPageProps => {
    const props: ILoginPageProps = {
        activeForm: ActiveForm.LoginForm
    };

    switch (getRouterPath(state)) {
        case '/register':
            props.activeForm = ActiveForm.RegisterForm;
            break;
        case '/login':
        default:
            props.activeForm = ActiveForm.LoginForm;
    }
    
    return props;
};

// Container
export const LoginPageContainer = connect(mapStateToProps)(LoginPage);