import api from './Api';

export function signIn(email, password) {
    return api.post('/login', { email, password });
}