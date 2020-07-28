import styled from "styled-components";
import { primaryColor } from '../../../constans/StyleContans';

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;

  h1 {
      font-size: 25px;
      font-weight: 700;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: baseline;
  flex-wrap: wrap;
  padding: 5em 2.5em;
  width: 100%;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 5em;

  form {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${(props) => props.applyMargin ? '2em' : 0};
`;

export const ForgetPasswordText = styled.div`
  display: flex;
  width: 100%;
  padding: 1em 0;

  span {
    color: #333;
    margin-left: auto;
    cursor: pointer;
  }
  span:hover {
    color: ${primaryColor};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2em;
  justify-content: center;

  div {
    width: 75%;
  }
`;

export const CreateAccountText = styled.span`
  color: ${primaryColor};
  font-size: 20px;
  cursor: pointer;

  :hover {
    color: #333;
  }
`;