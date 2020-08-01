import React from 'react';

import { ButtonType, IButtonProps } from './';

import buttonStyles from './Button.module.scss';

export const Button = ({label, onClick, type}: IButtonProps): React.ReactElement<IButtonProps> => {
  const typeToCssClass = (type?: ButtonType): string => {
    switch (type) {
    case ButtonType.Primary:
    default:
      return buttonStyles.primary;
    }
  }; 

  return <button className={typeToCssClass(type)} onClick={onClick}>{label}</button>;
};
