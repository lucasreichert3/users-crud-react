import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/Api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const isLogged = () => {
        const { cookie } = document;
        if (cookie) {
            const email = cookie.split('=');
            if (email && email.length && email[1]) {
                api.defaults.headers['Authorization'] = email[1];
                return true;
            }
        }
        return false;
    };

    const [logged, setLogged] = useState(isLogged());

    useEffect(() => {
        setLogged(isLogged());
    }, []);

    const login = (email) => {
        document.cookie = `email=${email}`;
        api.defaults.headers['Authorization'] = email;
        setLogged(true);
    };

    const logout = () => {
        document.cookie = 'email=';
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{ logged, logout, login }}>
          {children}
        </AuthContext.Provider>
      );
}

export function useAuth() {
    const context = useContext(AuthContext);
  
    return context;
}