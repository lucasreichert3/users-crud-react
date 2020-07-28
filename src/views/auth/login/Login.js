import React, { useState } from 'react';
import {
  LoginContainer,
  InputsContainer,
  TitleContainer,
  Container,
  ForgetPasswordText,
  ButtonContainer,
  CreateAccountText,
} from './styles';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import { withRouter } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth';
import { validateForm } from '../../../components/formValidator/FormValidator';
import { Validators } from '../../../components/formValidator/FormValidator';

const INIT_STATE = {
  email: {
    value: '',
    validators: [Validators.required, Validators.email],
    valid: true,
    errorMessage: '',
  },
  password: {
    value: '',
    validators: [Validators.required],
    valid: true,
    errorMessage: '',
  },
};

function Login(props) {
  const [loginForm, setLoginForm] = useState(INIT_STATE);
  const { login } = useAuth();

  const setFieldValue = ({ value, name }) => {
    const field = loginForm[name];
    setLoginForm({ ...loginForm, [name]: { ...field, value } });
  };

  const redirectTo = (path) => {
    props.history.push(path);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { form, isValid } = validateForm(loginForm);
    setLoginForm({ ...loginForm, ...form });
    if (isValid) {
      login(loginForm.email.value);
      redirectTo('/users');
    }
  };

  return (
    <LoginContainer>
      <TitleContainer>
        <h1>Gerencie seus usuários</h1>
      </TitleContainer>
      <InputsContainer>
        <form onSubmit={handleClick}>
          <Container>
            <Input
              type="text"
              value={loginForm?.email?.value}
              icon={MailOutlineIcon}
              name="email"
              placeholder="Email"
              onValueChange={setFieldValue}
              valid={loginForm?.email?.valid}
              validators={loginForm?.email?.validators}
              submittedMessage={loginForm?.email?.errorMessage}
            ></Input>
          </Container>
          <Container applyMargin>
            <Input
              type="password"
              value={loginForm?.password?.value}
              icon={LockIcon}
              name="password"
              placeholder="Senha"
              onValueChange={setFieldValue}
              valid={loginForm?.password?.valid}
              validators={loginForm?.password?.validators}
              submittedMessage={loginForm?.password?.errorMessage}
            ></Input>
          </Container>
          <ForgetPasswordText>
            <span>Esqueceu sua senha?</span>
          </ForgetPasswordText>
          <ButtonContainer>
            <div>
              <Button type="submit" text="Entrar"></Button>
            </div>
          </ButtonContainer>
        </form>
        <ButtonContainer>
          <CreateAccountText onClick={() => redirectTo('/signup')}>
            Crie sua conta
          </CreateAccountText>
        </ButtonContainer>
      </InputsContainer>
    </LoginContainer>
  );
}

export default withRouter(Login);
