import React from "react";
import { Switch, Redirect } from "react-router-dom";
import UsersList from "../views/users/UsersList";
import RouteWithLayout from "../components/routeWithLayout/RouteWithLayout";
import Login from "../views/auth/login/Login";
import SignUp from "../views/auth/signUp/SignUp";
import AuthLayout from "../views/auth/main/Auth";
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export default () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/users" />
      <RouteWithLayout
        exact
        path="/login"
        layout={AuthLayout}
        component={Login}
      ></RouteWithLayout>
      <RouteWithLayout
        exact
        path="/signup"
        layout={AuthLayout}
        component={SignUp}
      ></RouteWithLayout>
      <PrivateRoute exact path="/users" component={UsersList}></PrivateRoute>
    </Switch>
  );
};
