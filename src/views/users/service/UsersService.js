import api from '../../../services/Api';

export const getUsers = () => {
    return api.get('users');
};