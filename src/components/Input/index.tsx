import React from 'react';

import { InputStyles, Label } from './styles';

interface IProps {
  value: string;
  name: string;
  placeholder?: string;
  onChange(value: string): void;
  type?: string;
  label?: string;
  withBorder?: boolean;
}

const Input: React.FC<IProps> = ({ name, onChange, label, ...props }) => (
  <>
    <Label htmlFor={name}>
      <p data-testid={`label-input-${name}`}>{label}</p>
      <InputStyles
        {...props}
        name={name}
        onChange={event => onChange(event.target.value)}
      />
    </Label>
  </>
);

export default Input;
