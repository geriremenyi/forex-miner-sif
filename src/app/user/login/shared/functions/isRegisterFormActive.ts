import { ActiveForm } from '~app/user/login/shared/types';

export const isRegisterFormActive = (activeForm: ActiveForm): boolean => activeForm === ActiveForm.RegisterForm;