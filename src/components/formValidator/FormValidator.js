export const validateForm = (form) => {
  let isValid = true;
  for (const fieldName in form) {
    const field = form[fieldName];
    const [{ hasError, message }] = applyValidators(field.validators, {
      value: field.value,
      length: field.length,
    });
    if (hasError) {
      isValid = false;
    }
    field.valid = !hasError;
    field.errorMessage = message;
  }
  return { form, isValid };
};

export const setAllValid = (form) => {
  for (const fieldName in form) {
    const field = form[fieldName];
    field.valid = true;
    field.value = '';
    field.errorMessage = '';
  }
  return form;
};

export const applyValidators = (validators, value) => {
  const applyFieldValidator = validators.map((validator) => validator(value));
  const errors = applyFieldValidator.filter(({ hasError }) => hasError);
  return errors && errors.length ? errors : [{ hasError: false, message: '' }];
};

const requiredValidator = ({ value }) => ({
  hasError: value.trim() === '',
  message: 'Este campo é obrigatório!',
});

const emailValidator = ({ value }) => {
  const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return {
    hasError: !value.match(emailPattern),
    message: 'Formato de email inválido!',
  };
};

const minLengthValidator = ({ value, length }) => ({
  hasError: value.trim().length < length,
  message: `O campo deve ter no mínimo ${length} carácteres!`,
});

export const Validators = {
  required: requiredValidator,
  email: emailValidator,
  minLength: minLengthValidator
};
