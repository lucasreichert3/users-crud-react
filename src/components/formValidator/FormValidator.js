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
  const errors = validators.map((validator) => {
    const validatorObj = validator(value);
    if (validatorObj.hasError) {
      return validatorObj;
    }
    return {};
  });
  return errors && errors.length ? errors : [{ hasError: false, message: '' }];
};

export const requiredValidator = (value) => ({
  hasError: value.trim() === '',
  message: 'Este campo é obrigátorio!',
});
