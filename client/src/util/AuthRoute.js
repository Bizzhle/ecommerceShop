import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { connect } from "react-redux";
import { currentUser } from "../context/reducers/loginReducer";

function AuthRoute({ component: Component, ...rest }) {
  const currentUser = useSelector((state) => state);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default AuthRoute;
