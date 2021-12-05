import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

// import { connect } from "react-redux";

function AuthRoute({ component: Component, ...rest }) {
  const { currentUser } = useSelector((state) => state.login);

  console.log(currentUser);
  // console.log(currentUsers);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser.user.isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default AuthRoute;
