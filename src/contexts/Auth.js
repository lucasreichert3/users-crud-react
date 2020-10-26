import React, { createContext, useState, useContext } from 'react';
import { signIn } from '../services/Auth';
import api from '../services/Api';

const AuthContext = createContext({});

const INIT_STATE_LOGGED_USER = {
    id: '',
    email: '',
    password: '',
    token: ''
}

export const AuthProvider = ({ children, history }) => {
    const userStorage = localStorage.getItem('user');
    const [loggedUser, setLoggedUser] = useState(userStorage && userStorage !== 'undefined' ? JSON.parse(userStorage) : {});
    const [logged, setLogged] = useState(userStorage && userStorage !== 'undefined');
    verifyLogged();
    

    function verifyLogged() {
        if (loggedUser && loggedUser.token)
            api.defaults.headers['Authorization'] = `Bearer ${loggedUser.token}`;
    }

    const login = async (email, password) => {
        return await signIn(email, password).then(({ data : { user, token } }) => {
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            setLogged(true);
            setLoggedUser({ ...user, token });
            localStorage.setItem('user', JSON.stringify({...user, token}));
            return { ...user, token };
        });
    };

    const logout = () => {
        localStorage.clear();
        setLoggedUser(INIT_STATE_LOGGED_USER);
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{ logged, logout, login, loggedUser }}>
          {children}
        </AuthContext.Provider>
      );
}

export function useAuth() { 
    return useContext(AuthContext);
}