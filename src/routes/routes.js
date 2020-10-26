import React from "react";
import { Switch, Redirect, BrowserRouter } from "react-router-dom";
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RouteWithLayout from "../components/routeWithLayout/RouteWithLayout";
import UsersList from "../views/users/UsersList";
import Login from "../views/auth/login/Login";
import SignUp from "../views/auth/signUp/SignUp";
import AuthLayout from "../views/auth/main/Auth";
import { useAuth } from "../contexts/Auth";

export default () => {
  const { logged } = useAuth();
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/users" />
        { 
          logged && 
          <Redirect exact from="/login" to="/users"  />
        }
        { 
          logged && 
          <Redirect exact from="/signup" to="/users"  />
        }
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
        <PrivateRoute exact path="/users" component={UsersList} />
      </Switch>
    </BrowserRouter>
  );
};
