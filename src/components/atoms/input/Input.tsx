import React, { ChangeEventHandler } from 'react';
import { InputType } from '../../../common/types';

export type InputProps = {
  className: string;
  type: InputType;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name: string;
  value?: string;
};

const Input: React.FC<InputProps> = ({
  value,
  className,
  type,
  placeholder,
  onChange,
  name,
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    ></input>
  );
};
export default Input;
