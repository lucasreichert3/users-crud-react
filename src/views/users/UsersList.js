import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import { UsersWrapper, UsersContainer, PageHeader } from './style';
import UsersTable from './components/usersTable/UsersTable';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import api from '../../services/Api';

function UserList(props) {
    const [users, setUsers] = useState([]);
    const { logout } = useAuth();

    useEffect(() => {
        async function getUser() {
            const { data: { users } } = await api.get('users');
            setUsers(users);
        }
        
        getUser();
    }, []);

    function handleLogout() {
        logout();
        props.history.push('/login');
    }

    return (
        <UsersWrapper>
            <PageHeader>
                <div className="exit-icon" onClick={handleLogout}>
                    <ExitToAppIcon />
                </div>
            </PageHeader>
            <UsersContainer>
                <UsersTable users={users} />
            </UsersContainer>
        </UsersWrapper>
    );
}

export default UserList;
