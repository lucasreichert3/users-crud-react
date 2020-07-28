import React, { useEffect, useState } from 'react';
import { InputContainer, Container, ErrorMessageContainer } from './styles.js';
import { applyValidators } from '../../components/formValidator/FormValidator';

export default function Input({
  icon: Icon,
  type,
  name,
  value,
  onValueChange,
  placeholder,
  valid,
  validators,
  submittedMessage
}) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setHasError(!valid);
    setErrorMessage(submittedMessage);
  }, [valid, submittedMessage]);

  const handleChange = ({ target: { value, name } }) => {
    const [{ hasError, message }] = applyValidators(validators, value);
    setHasError(hasError);
    setErrorMessage(message);
    onValueChange({ value, name });
  };

  return (
    <Container>
      <InputContainer hasError={hasError}>
        <Icon />
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </InputContainer>
      {hasError && (
        <ErrorMessageContainer>
          <span>{errorMessage}</span>
        </ErrorMessageContainer>
      )}
    </Container>
  );
}
