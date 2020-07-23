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
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { withRouter } from 'react-router-dom';

const INIT_STATE = {
  username: "",
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
            name="username"
            placeholder="Usuário"
            onValueChange={setFieldValue}
          >
            <PersonIcon />
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
            <Button text="Entrar"></Button>
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
