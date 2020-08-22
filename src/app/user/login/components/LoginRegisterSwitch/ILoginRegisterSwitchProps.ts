import { ActiveForm } from '~app/user/login/shared/types';

export interface ILoginRegisterSwitchProps {
    activeForm: ActiveForm;
    onSwitchButtonClick: () => void;
    isColdLoad?: boolean;
}