import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersList from './views/users/UsersList';
import Auth from './views/auth/Auth.routes';

export default () => {
    return (
        <Switch>
            <Route exact path="/login" component={Auth}></Route>
            <Route exact path="/signup" component={Auth}></Route>
            <Route exact path="/users" component={UsersList}></Route>
        </Switch>
    );
}