import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login/Login';
import Auth from './main/Auth';
import SignUp from './signUp/SignUp';

export default () => {
    return (
        <Auth>
            <Switch>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={SignUp}></Route>
            </Switch>
        </Auth>
    );
}