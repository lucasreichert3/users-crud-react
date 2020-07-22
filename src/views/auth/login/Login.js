import React, { useState } from "react";
import {
  ImageContainer,
  Wraper,
  LoginContainerWraper,
  LoginContainer,
  InputsContainer,
  TitleContainer
} from "./styles";
import Input from "../../../components/input/Input";
import PersonIcon from '@material-ui/icons/Person';

export default function Login() {
  const [loginForm, setLoginForm] = useState({});

  return (
    <Wraper>
      <ImageContainer />
      <LoginContainerWraper>
        <LoginContainer>
          <TitleContainer>
            <h1>Gerencie seus usuários</h1>
          </TitleContainer>
          <InputsContainer>
            <Input value={loginForm?.user}>
              <PersonIcon />
            </Input>
          </InputsContainer>
        </LoginContainer>
      </LoginContainerWraper>
    </Wraper>
  );
}
