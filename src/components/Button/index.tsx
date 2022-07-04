import React, { PropsWithChildren } from 'react';

import { ButtonStyles } from './styles';

interface IProps {
  onClick?(): void;
  disabled?: boolean;
}

const Button: React.FC<PropsWithChildren<IProps>> = ({
  disabled,
  children,
  ...props
}) => (
  <ButtonStyles disabled={disabled} {...props}>
    {children}
  </ButtonStyles>
);

export default Button;
