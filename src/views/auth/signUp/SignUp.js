import React, { useState } from 'react';
import {
  SignupContainer,
  InputsContainer,
  InputContainer,
  CentralizedContainer,
  Title,
  BackContainer,
  ButtonContainer,
} from './styles';
import Input from '../../../components/input/Input';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { withRouter } from 'react-router-dom';
import Button from '../../../components/button/Button';
import { useAuth } from '../../../contexts/Auth';
import { getSignUpForm } from './SignUp.model';
import { validateForm } from '../../../components/formValidator/FormValidator';

const INIT_STATE = getSignUpForm;

function SignUp(props) {
  const [signUpForm, setsignUpForm] = useState(INIT_STATE);
  const { login } = useAuth();

  const setFieldValue = ({ value, name }) => {
    const field = signUpForm[name];
    setsignUpForm({ ...signUpForm, [name]: { ...field, value } });
  };

  const redirectTo = (path) => {
    props.history.push(path);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { form, isValid } = validateForm(signUpForm);
    setsignUpForm({ ...signUpForm, ...form });
    if (isValid) {
      login(signUpForm.email.value);
      redirectTo('/users');
    }
  };

  return (
    <SignupContainer>
      <BackContainer>
        <div onClick={() => redirectTo('/login')}>
          <KeyboardBackspaceIcon style={{ fontSize: 40 }} />
        </div>
      </BackContainer>
      <CentralizedContainer>
        <Title>Crie uma conta preenchendo os dados abaixo</Title>
      </CentralizedContainer>
      <InputsContainer>
        <form onSubmit={handleClick}>
          <InputContainer>
            <Input
              type="title"
              icon={PersonIcon}
              value={signUpForm?.name?.value}
              name="name"
              placeholder="Digite seu nome"
              onValueChange={setFieldValue}
              valid={signUpForm?.name?.valid}
              validators={signUpForm?.name?.validators}
              submittedMessage={signUpForm?.name?.errorMessage}
            ></Input>
          </InputContainer>
          <InputContainer applyMargin>
            <Input
              type="title"
              icon={MailOutlineIcon}
              value={signUpForm?.email?.value}
              name="email"
              placeholder="Digite seu email"
              onValueChange={setFieldValue}
              valid={signUpForm?.email?.valid}
              validators={signUpForm?.email?.validators}
              submittedMessage={signUpForm?.email?.errorMessage}
            ></Input>
          </InputContainer>
          <InputContainer applyMargin>
            <Input
              mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-',/\d/, /\d/]}
              type="title"
              icon={AssignmentIndIcon}
              value={signUpForm?.cpf?.value}
              name="cpf"
              placeholder="Digite seu CPF"
              onValueChange={setFieldValue}
              valid={signUpForm?.cpf?.valid}
              validators={signUpForm?.cpf?.validators}
              submittedMessage={signUpForm?.cpf?.errorMessage}
              length={signUpForm?.cpf?.length}
            ></Input>
          </InputContainer>
          <InputContainer applyMargin>
            <Input
              mask={['(', /\d/, /\d/, ')', ' ' , /\d/, /\d/, /\d/, /\d/, /\d/, '-',/\d/, /\d/, /\d/, /\d/]}
              type="title"
              icon={PhoneIcon}
              value={signUpForm?.number?.value}
              name="number"
              placeholder="Digite seu celular"
              onValueChange={setFieldValue}
              valid={signUpForm?.number?.valid}
              validators={signUpForm?.number?.validators}
              submittedMessage={signUpForm?.number?.errorMessage}
              length={signUpForm?.number?.length}
            ></Input>
          </InputContainer>
          <InputContainer applyMargin>
            <Input
              type="password"
              icon={LockIcon}
              value={signUpForm?.password?.value}
              name="password"
              placeholder="Digite sua senha"
              onValueChange={setFieldValue}
              valid={signUpForm?.password?.valid}
              validators={signUpForm?.password?.validators}
              submittedMessage={signUpForm?.password?.errorMessage}
            ></Input>
          </InputContainer>
          <InputContainer applyMargin>
            <Input
              type="password"
              icon={LockIcon}
              value={signUpForm?.confirmPassword?.value}
              name="confirmPassword"
              placeholder="Confirme sua senha"
              onValueChange={setFieldValue}
              valid={signUpForm?.confirmPassword?.valid}
              validators={signUpForm?.confirmPassword?.validators}
              submittedMessage={signUpForm?.confirmPassword?.errorMessage}
            ></Input>
          </InputContainer>
          <CentralizedContainer applyMargin>
            <ButtonContainer>
              <Button type="submit" text="Criar conta"></Button>
            </ButtonContainer>
          </CentralizedContainer>
        </form>
      </InputsContainer>
    </SignupContainer>
  );
}

export default withRouter(SignUp);
