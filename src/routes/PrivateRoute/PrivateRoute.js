import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";

const PrivateRoute = (props) => {
  const { path, component: Component, ...rest } = props;

  const { logged } = useAuth();

  return (
    <Route
      path={path}
      {...rest}
      render={(props) =>
        logged ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login"  />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
