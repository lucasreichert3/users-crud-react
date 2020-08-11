import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: ${({showModal}) => showModal ? 'block' : 'none'}; 
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`

export const ModalContent = styled.div`
  background-color: #fefefe;
  border-radius: 7px;
  margin: 8% auto;
  padding: 20px;
  border: 1px solid #888;
  width: ${({ size }) => size ? size : '50%'};
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: .5em;
  border-bottom: 1px solid #e9e9e9;

  span {
    font-weight: 700;
  }

  svg {
    cursor: pointer;
    margin-left: auto;
  }
`

export const ModalBody = styled.div`
  padding-top: .5em;
`