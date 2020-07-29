import React, { useEffect, useState } from 'react';
import { InputContainer, Container, ErrorMessageContainer } from './styles.js';
import { applyValidators } from '../../components/formValidator/FormValidator';
import MaskedInput from 'react-text-mask';

export default function Input({
  icon: Icon,
  type,
  name,
  value,
  onValueChange,
  placeholder,
  valid,
  validators,
  submittedMessage,
  mask,
  length
}) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setHasError(!valid);
    setErrorMessage(submittedMessage);
  }, [valid, submittedMessage]);

  const handleChange = ({ target: { value, name } }) => {
    const [{ hasError, message }] = applyValidators(validators, { value, length });
    setHasError(hasError);
    setErrorMessage(message);
    onValueChange({ value, name });
  };

  return (
    <Container>
      <InputContainer hasError={hasError}>
        <Icon />
        {mask ? (
          <MaskedInput
            mask={mask}
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            guide={false}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
          />
        )}
      </InputContainer>
      {hasError && (
        <ErrorMessageContainer>
          <span>{errorMessage}</span>
        </ErrorMessageContainer>
      )}
    </Container>
  );
}
