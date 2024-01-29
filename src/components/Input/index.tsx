import React, { ReactElement } from 'react';

import { Label, InputElement } from './styles';

interface InputProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required: true;
  step: string;
  type: string;
}

export default function Input(props: InputProps): ReactElement {
  const { placeholder, required, type = 'text', ...rest } = props;

  return (
    <Label>
      <span>
        {placeholder}
        {required && <span>*</span>}
      </span>
      <div>
        <InputElement
          type={type}
          placeholder={placeholder}
          required={required}
          {...rest}
        />
      </div>
    </Label>
  );
}
