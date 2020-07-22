import styled from "styled-components";
import usersImg from "../../../assets/users.png";

export const Wraper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  background-color: #e9e9e9;
  display: flex;
  height: 100vh;
  width: 70%;
  background-image: url(${usersImg});
  background-repeat: no-repeat;
  background-position: center;
`;

export const LoginContainerWraper = styled.div`
  display: flex;
  width: 30%;
`;

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
  width: 100%;
  margin-top: 5em;
`;
