import { Validators } from '../../../components/formValidator/FormValidator';

export const getSignUpForm = {
    name: {
      value: '',
      validators: [Validators.required],
      valid: true,
      errorMessage: '',
    },
    email: {
      value: '',
      validators: [Validators.required, Validators.email],
      valid: true,
      errorMessage: '',
    },
    cpf: {
      value: '',
      validators: [Validators.required, Validators.minLength],
      valid: true,
      errorMessage: '',
      length: 14
    },
    number: {
      value: '',
      validators: [Validators.required, Validators.minLength],
      valid: true,
      errorMessage: '',
      length: 15
    },
    password: {
      value: '',
      validators: [Validators.required],
      valid: true,
      errorMessage: '',
    },
    confirmPassword: {
      value: '',
      validators: [Validators.required],
      valid: true,
      errorMessage: '',
    },
  };