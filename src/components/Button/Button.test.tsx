import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Button, ButtonType } from '.';

import buttonStyles from './Button.module.scss';

describe(Button.name, () => {

  [
    { buttonType: ButtonType.Primary, expecteTypeClass: buttonStyles.primary }
  ].forEach(testCase => {
    it(`type ${testCase.buttonType} should render correctly` ,() => {
      // Arrange
      ///////////
      const label = 'This is a Button';
      const mockOnClick = jest.fn().mockImplementation(() => { 
        // Do nothing just mock  
      });

      // Act
      ///////
      const { container } = render(<Button label={label} onClick={mockOnClick} type={testCase.buttonType} />);
      const button = container.querySelector('button');
      fireEvent.click(button);

      // Assert
      //////////
      expect(button).toBeInTheDocument();
      expect(button.textContent).toBe(label);
      expect(mockOnClick).toHaveBeenCalledTimes(1);
      expect(button).toHaveClass(testCase.expecteTypeClass);
    });
  });
});