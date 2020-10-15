import { ActiveForm } from '~app/user/login/shared/types';

export const isLoginFormActive = (activeForm: ActiveForm): boolean => activeForm === ActiveForm.LoginForm;