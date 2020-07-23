import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UsersList from "./views/users/UsersList";
import RouteWithLayout from "./components/routeWithLayout/RouteWithLayout";
import Login from "./views/auth/login/Login";
import SignUp from "./views/auth/signUp/SignUp";
import AuthLayout from "./views/auth/main/Auth";

export default () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
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
      <Route exact path="/users" component={UsersList}></Route>
    </Switch>
  );
};
