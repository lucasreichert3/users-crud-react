import React, { useState } from "react";
import {
  LoginContainer,
  InputsContainer,
  TitleContainer,
  Container,
  ForgetPasswordText,
  ButtonContainer,
  CreateAccountText,
} from "./styles";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import { withRouter } from 'react-router-dom';
import { setCookie } from './LoginHandler';

const INIT_STATE = {
  email: "",
  password: "",
};

function Login(props) {
  const [loginForm, setLoginForm] = useState(INIT_STATE);

  const setFieldValue = ({ target: { value, name } }) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const redirectTo = (path) => {
    props.history.push(path);
  };

  const handleClick = () => {
    if (loginForm.email && loginForm.password) {
      setCookie(loginForm.email);
      redirectTo('/users');
    }
  }

  return (
    <LoginContainer>
      <TitleContainer>
        <h1>Gerencie seus usuários</h1>
      </TitleContainer>
      <InputsContainer>
        <Container>
          <Input
            type="text"
            value={loginForm?.user}
            name="email"
            placeholder="Email"
            onValueChange={setFieldValue}
          >
            <MailOutlineIcon />
          </Input>
        </Container>
        <Container applyMargin>
          <Input
            type="password"
            value={loginForm?.password}
            name="password"
            placeholder="Senha"
            onValueChange={setFieldValue}
          >
            <LockIcon />
          </Input>
        </Container>
        <ForgetPasswordText>
          <span>Esqueceu sua senha?</span>
        </ForgetPasswordText>
        <ButtonContainer>
          <div>
            <Button text="Entrar" click={() => handleClick()}></Button>
          </div>
        </ButtonContainer>
        <ButtonContainer>
          <CreateAccountText onClick={() => redirectTo('/signup')}>Crie sua conta</CreateAccountText>
        </ButtonContainer>
      </InputsContainer>
    </LoginContainer>
  );
}

export default withRouter(Login);
