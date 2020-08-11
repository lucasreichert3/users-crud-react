import styled from 'styled-components';
import { primaryColor } from '../../constans/StyleContans';

export const StyledButton = styled.button`
    width: 100%;
    border: none;
    background-color: ${primaryColor};
    padding: .7em;
    color: #fff;
    text-decoration: uppercase;
    border-radius: 50px;
    font-size: ${({ small }) => small ? '16px' : '22px'};
    cursor: pointer;
    transition: 200ms;

    &:hover {
        opacity: .8;
    }
`