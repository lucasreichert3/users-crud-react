import React from 'react';
import { InputContainer } from './styles.js';

export default function Input(props) {

    return (
        <InputContainer>
            {props.children}
            <input type="text" value={props.value} />
        </InputContainer>
    );

}