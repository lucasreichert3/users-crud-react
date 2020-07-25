import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const isLogged = () => {
        const { cookie } = document;
        if (cookie) {
            const email = cookie.split('=');
            if (email && email.length && email[1]) {
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