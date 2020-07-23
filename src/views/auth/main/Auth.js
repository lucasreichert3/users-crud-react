import React from 'react';
import { Wraper, ImageContainer, ContentWraper } from './styles';

export default function Auth(props) {

    return (
    <Wraper>
        <ImageContainer />
        <ContentWraper>
            {props.children}
        </ContentWraper>
      </Wraper>
    );

}