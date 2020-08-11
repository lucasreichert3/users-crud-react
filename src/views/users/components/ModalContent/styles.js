import styled from 'styled-components';

export const ModalWrapper = styled.div`
    display: flex;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: .5em;

  form {
    width: 100%;
  }
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
`;

export const ButtonContainer = styled.div`
  width: 75%;
`;