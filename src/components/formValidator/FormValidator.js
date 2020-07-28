export const validateForm = (form) => {
  let isValid = true;
  for (const fieldName in form) {
    const field = form[fieldName];
    const [{ hasError, message }] = applyValidators(
      field.validators,
      field.value
    );
    if (hasError) {
      isValid = false;
    }
    field.valid = !hasError;
    field.errorMessage = message;
  }
  return { form, isValid };
};

export const applyValidators = (validators, value) => {
  const applyFieldValidator = validators.map((validator) => validator(value));
  const errors = applyFieldValidator.filter(({ hasError }) => hasError);
  return errors && errors.length ? errors : [{ hasError: false, message: '' }];
};

const requiredValidator = (value) => ({
  hasError: value.trim() === '',
  message: 'Este campo é obrigátorio!',
});

const emailValidator = (value) => {
  const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return {
    hasError: !value.match(emailPattern),
    message: 'Formato de email inválido!'
  };
};

export const Validators = {
  required: requiredValidator,
  email: emailValidator
};
