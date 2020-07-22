import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersList from './views/users/UsersList';
import Login from './views/auth/login/Login';

export default () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/users" component={UsersList}></Route>
        </Switch>
    );
}