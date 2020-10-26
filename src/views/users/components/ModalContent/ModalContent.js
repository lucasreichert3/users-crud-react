import React, { useState, useEffect } from 'react';
import { ModalWrapper, InputsContainer, InputContainer, CentralizedContainer, ButtonContainer } from './styles';
import Input from '../../../../components/input/Input';
import Button from '../../../../components/button/Button';
import { Validators, validateForm } from '../../../../components/formValidator/FormValidator';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PhoneIcon from '@material-ui/icons/Phone';

const INIT_STATE = {
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
    }
}

export const ModalContent = ({ user }) => {
    const [userForm, setUserForm] = useState(INIT_STATE);

    useEffect(() => {
        // if (user && user.id) {
          setUserForm({ 
              name: {...userForm.fullName, value: getUserValue('fullName'), valid: true}, 
              email: { ...userForm.email, value: getUserValue('email'), valid: true },
              cpf:  { ...userForm.cpf, value: getUserValue('cpf'), valid: true},
              number:  { ...userForm.number, value: getUserValue('number'), valid: true }
              });
        // } 
    }, [user]);

    const getUserValue = (key) => {
      return user && user.id ? user[key] : '';
    };

    const handleClick = (e) => {
        e.preventDefault();
        const { form, isValid } = validateForm(userForm);
        setUserForm({ ...userForm, ...form });
        if (isValid) {
          
        }
      };

      const setFieldValue = ({ value, name }) => {
        const field = userForm[name];
        setUserForm({ ...userForm, [name]: { ...field, value } });
      };

    return (
        <ModalWrapper>
            <InputsContainer>
        <form onSubmit={handleClick}>
          <InputContainer>
            <Input
              type="title"
              icon={PersonIcon}
              value={userForm?.name?.value}
              name="name"
              placeholder="Digite o nome"
              onValueChange={setFieldValue}
              valid={userForm?.name?.valid}
              validators={userForm?.name?.validators}
              submittedMessage={userForm?.name?.errorMessage}
            ></Input>
          </InputContainer>
          <InputContainer applyMargin>
            <Input
              type="title"
              icon={MailOutlineIcon}
              value={userForm?.email?.value}
              name="email"
              placeholder="Digite o email"
              onValueChange={setFieldValue}
              valid={userForm?.email?.valid}
              validators={userForm?.email?.validators}
              submittedMessage={userForm?.email?.errorMessage}
            ></Input>
          </InputContainer>
          <InputContainer applyMargin>
            <Input
              mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-',/\d/, /\d/]}
              type="title"
              icon={AssignmentIndIcon}
              value={userForm?.cpf?.value}
              name="cpf"
              placeholder="Digite o CPF"
              onValueChange={setFieldValue}
              valid={userForm?.cpf?.valid}
              validators={userForm?.cpf?.validators}
              submittedMessage={userForm?.cpf?.errorMessage}
              length={userForm?.cpf?.length}
            ></Input>
          </InputContainer>
          <InputContainer applyMargin>
            <Input
              mask={['(', /\d/, /\d/, ')', ' ' , /\d/, /\d/, /\d/, /\d/, /\d/, '-',/\d/, /\d/, /\d/, /\d/]}
              type="title"
              icon={PhoneIcon}
              value={userForm?.number?.value}
              name="number"
              placeholder="Digite o celular"
              onValueChange={setFieldValue}
              valid={userForm?.number?.valid}
              validators={userForm?.number?.validators}
              submittedMessage={userForm?.number?.errorMessage}
              length={userForm?.number?.length}
            ></Input>
          </InputContainer>
          <CentralizedContainer applyMargin>
            <ButtonContainer>
              <Button type="submit" text="Salvar"></Button>
            </ButtonContainer>
          </CentralizedContainer>
        </form>
      </InputsContainer>
        </ModalWrapper>
    )
};