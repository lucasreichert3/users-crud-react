import React from 'react';
import {AuthProvider} from './Auth';

export default function Contexts({children}) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}
