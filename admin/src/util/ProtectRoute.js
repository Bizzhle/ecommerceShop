import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

// import { connect } from "react-redux";

function ProtectRoute({ component: Component, ...rest }) {
  const { currentUser } = useSelector((state) => state.login);
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser.user.isAdmin) {
      setUser(!user);
    }
  }, [currentUser, user]);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default ProtectRoute;
