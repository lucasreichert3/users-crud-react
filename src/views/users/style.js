import styled from 'styled-components';

export const UsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: #e9e9e9;
    align-items: center;
    justify-content: center;
`;

export const UsersContainer = styled.div`
    display: block;
    height: 80vh;
    width: 80%;
    padding: 1.5em 3em;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 1px 1px 10px rgba(0,0,0,.2);
`;

export const PageHeader = styled.div`
    display: flex;
    width: 85%;
    margin-bottom: 23px;

    .exit-icon {
        padding: 0.4em;
        border-radius: 50px;
        align-items: center;
        justify-content: center;
        display: flex;
        cursor: pointer;
        margin-left: auto;
        transition: 200ms;

        &:hover {
            background-color: #d9d9d9;
        }
    }
`;


