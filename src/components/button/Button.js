import React from 'react';
import { StyledButton } from './styles';

export default function Button({ text, click, type }) {
    return (
        <StyledButton type={type} onClick={click} >{text}</StyledButton>
    );
}