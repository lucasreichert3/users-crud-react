import React, { useState } from "react";
import {
  SignupContainer,
  InputsContainer,
  InputContainer,
  CentralizedContainer,
  Title,
  BackContainer,
  ButtonContainer
} from "./styles";
import Input from "../../../components/input/Input";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from "@material-ui/icons/Lock";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { withRouter } from 'react-router-dom';
import Button from '../../../components/button/Button';
import { setCookie } from '../login/LoginHandler';

const INIT_STATE = {
  name: "",
  email: "",
  cpf: "",
  number: "",
  password: "",
  confirmPassword: "",
};

function SignUp(props) {
  const [signUpForm, setsignUpForm] = useState(INIT_STATE);

  const setFieldValue = ({ target: { value, name } }) => {
    setsignUpForm({ ...signUpForm, [name]: value });
  };

  const redirectTo = (path) => {
    props.history.push(path);
  };

  const handleClick = () => {
    setCookie(signUpForm.email);
    redirectTo('/users');
  }

  return (
    <SignupContainer>
        <BackContainer>
            <div onClick={() => redirectTo('/login')}>
                <KeyboardBackspaceIcon style={{ fontSize: 40 }}/>
            </div>
        </BackContainer>
      <CentralizedContainer>
        <Title>Crie uma conta preenchendo os dados abaixo</Title>
      </CentralizedContainer>
      <InputsContainer>
        <InputContainer>
          <Input
            type="title"
            value={signUpForm?.name}
            name="name"
            placeholder="Digite seu nome"
            onValueChange={setFieldValue}
          >
            <PersonIcon />
          </Input>
        </InputContainer>
        <InputContainer applyMargin>
          <Input
            type="title"
            value={signUpForm?.email}
            name="email"
            placeholder="Digite seu email"
            onValueChange={setFieldValue}
          >
            <MailOutlineIcon />
          </Input>
        </InputContainer>
        <InputContainer applyMargin>
          <Input
            type="title"
            value={signUpForm?.cpf}
            name="cpf"
            placeholder="Digite seu CPF"
            onValueChange={setFieldValue}
          >
            <AssignmentIndIcon />
          </Input>
        </InputContainer>
        <InputContainer applyMargin>
          <Input
            type="title"
            value={signUpForm?.number}
            name="number"
            placeholder="Digite seu celular"
            onValueChange={setFieldValue}
          >
            <PhoneIcon />
          </Input>
        </InputContainer>
        <InputContainer applyMargin>
          <Input
            type="password"
            value={signUpForm?.password}
            name="password"
            placeholder="Digite sua senha"
            onValueChange={setFieldValue}
          >
            <LockIcon />
          </Input>
        </InputContainer>
        <InputContainer applyMargin>
          <Input
            type="password"
            value={signUpForm?.confirmPassword}
            name="confirmPassword"
            placeholder="Confirme sua senha"
            onValueChange={setFieldValue}
          >
            <LockIcon />
          </Input>
        </InputContainer>
        <CentralizedContainer applyMargin>
            <ButtonContainer>
                <Button text="Criar conta" click={() => handleClick()}></Button>
            </ButtonContainer>
        </CentralizedContainer>
      </InputsContainer>
    </SignupContainer>
  );
}

export default withRouter(SignUp);
