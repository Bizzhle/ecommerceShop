import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

// import { connect } from "react-redux";
// import { currentUser } from "../context/reducers/loginReducer";

function AuthRoute({ component: Component, ...rest }) {
  const currentUser = useSelector((state) => state.login.currentUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser.isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default AuthRoute;
