import styled from 'styled-components';

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: baseline;
  flex-wrap: wrap;
  padding: 5em 2.5em;
  width: 100%;
`

export const Title = styled.div`
    font-size: 25px;
    font-weight: 700;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 3em;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${(props) => props.applyMargin ? '1.5em' : 0};
`

export const CentralizedContainer = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${(props) => props.applyMargin ? '2em' : 0};
`
export const BackContainer = styled.div` 
  display: flex;
  width: 100%;
  padding: 1em 0;
  
  div:hover {
    transition: 200ms;
    cursor: pointer;
    border-radius: 50px;
    background-color: #e9e9e9;
  }
`

export const ButtonContainer = styled.div`
  width: 75%;
`
