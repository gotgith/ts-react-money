import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display:flex;
  align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 44px;
      background: none;
      border: none;
    }
`;

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>   //继承input的属性和事件

const Input: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props;
  return (
    <Label>
      <span>{props.label}</span>
      {/*拷贝出props除label和children外的所有属性*/}
      <input {...rest}/>
    </Label>
  );
};

export {Input};
