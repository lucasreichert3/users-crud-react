import React from 'react';
import { StyledButton } from './styles';

export default function Button({ text, click }) {
    return (
        <StyledButton type="button" onClick={click} >{text}</StyledButton>
    );
}