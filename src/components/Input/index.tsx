import React, { ReactElement } from 'react';

import { Label, InputElement } from './styles';

export default function Input(props: any): ReactElement {
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
