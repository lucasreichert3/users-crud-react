import React from 'react';
import { StyledButton } from './styles';

export default function Button({ text, click, type, small }) {
    return (
        <StyledButton type={type} onClick={click} small={small} >{text}</StyledButton>
    );
}