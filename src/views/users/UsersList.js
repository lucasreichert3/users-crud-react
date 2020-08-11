import React, { useEffect, useState } from 'react';
import { UsersWrapper, UsersContainer, PageHeader } from './style';
import UsersTable from './components/usersTable/UsersTable';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth } from '../../contexts/Auth';
import { withRouter } from 'react-router-dom';
import { getUsers } from './service/UsersService';

function UserList(props) {
    const [users, setUsers] = useState([]);
    const { logout } = useAuth();


    useEffect(() => {
        async function getUser() {
            await getUsers().then(({ data: { users } }) => setUsers(users));
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

export default withRouter(UserList);
