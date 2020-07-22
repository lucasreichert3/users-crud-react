import React from "react";
import { InputContainer } from "./styles.js";

export default function Input({
  children,
  type,
  name,
  value,
  onValueChange,
  placeholder,
}) {
  return (
    <InputContainer>
      {children}
      <input type={type} name={name} value={value} onChange={onValueChange} placeholder={placeholder} />
    </InputContainer>
  );
}
