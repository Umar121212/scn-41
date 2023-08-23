import React from "react";
import { Input } from "./AppInput.style";

type InputProps = {
  type: 'text' | 'tel' | 'password',
  placeholder: string,
  isDisabled: boolean,
  value?: string | null,
  onchange?: (event: any) => void,
  props?: any,
}

export const AppInput = ({ 
  type, 
  placeholder, 
  isDisabled, 
  //value, 
  //onChange, 
  props,
 }: InputProps) => {
  return (
    <Input 
      type={type} 
      placeholder={placeholder} 
      disabled={isDisabled} 
      {...props}
      //value={value}
      //onChange={onChange}
    />
  )
}