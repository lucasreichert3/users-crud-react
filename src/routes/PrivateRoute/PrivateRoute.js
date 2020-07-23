import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogged } from "../../views/auth/login/LoginHandler";

export const PrivateRoute = (props) => {
  const { path, component: Component, ...rest } = props;

  return (
    <Route
      path={path}
      {...rest}
      render={(props) =>
        isLogged() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login"  />
        )
      }
    ></Route>
  );
};
