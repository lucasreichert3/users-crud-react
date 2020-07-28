import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`
export const InputContainer = styled.div `
    display: flex;
    align-items: center;
    padding: 1em;
    box-shadow: 1px 1px 10px rgba(0,0,0,.2);
    border-radius: 7px;
    border: ${({ hasError }) => hasError ? '1px solid tomato' : 'none'};
    input {
        border: none;
        padding-left: 1em;
        width: 100%;
        font-size: 18px;
    }
`;

export const ErrorMessageContainer = styled.div`
    color: tomato;
    padding-top: .7em;
`;