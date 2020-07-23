import styled from 'styled-components';
import usersImg from "../../../assets/users.png";

export const Wraper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  background-color: #d9d9d9;
  display: flex;
  height: 100vh;
  width: 70%;
  background-image: url(${usersImg});
  background-repeat: no-repeat;
  background-position: center;
`;

export const ContentWraper = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
`;