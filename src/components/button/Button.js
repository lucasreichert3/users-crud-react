import React from 'react';
import { StyledButton } from './styles';

export default function Button({ text }) {
    return (
        <StyledButton type="button">{text}</StyledButton>
    );
}