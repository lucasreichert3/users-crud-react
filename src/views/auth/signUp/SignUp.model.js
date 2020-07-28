import { requiredValidator } from '../../../components/formValidator/FormValidator';

export const getSignUpForm = {
    name: {
      value: '',
      validators: [requiredValidator],
      valid: true,
      errorMessage: '',
    },
    email: {
      value: '',
      validators: [requiredValidator],
      valid: true,
      errorMessage: '',
    },
    cpf: {
      value: '',
      validators: [requiredValidator],
      valid: true,
      errorMessage: '',
    },
    number: {
      value: '',
      validators: [requiredValidator],
      valid: true,
      errorMessage: '',
    },
    password: {
      value: '',
      validators: [requiredValidator],
      valid: true,
      errorMessage: '',
    },
    confirmPassword: {
      value: '',
      validators: [requiredValidator],
      valid: true,
      errorMessage: '',
    },
  };