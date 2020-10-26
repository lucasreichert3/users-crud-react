import styled from 'styled-components';


export const UsersList = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;

    .header {
        width: 100%;
        border-bottom: 1px solid #d9d9d9;
        padding: .5em 3em;
        font-weight: 700;
    }

    .content {
        width: 100%;
    }

    .name {
        width: 25%;
    }

    .cpf {
        width: 20%;
    }

    .number {
        width: 20%;
    }

    .email {
        width: 25%;
    }

    .actions {
        width: 10%;
    }
`

export const HeaderItem = styled.div`
    display: inline-block;
`;

export const UserItem = styled.div`
    padding: 1em 3em;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
    transition: 200ms;

    &:hover {
        background-color: #d9d9d9;
    }
`;