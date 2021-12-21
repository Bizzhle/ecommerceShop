import React, { useState } from "react";
import "./app.css";
import Sidemenu from "./components/sidemenu/Sidemenu";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/products/ProductList";
import SingleProduct from "./pages/product/SingleProduct";
import NewProduct from "./pages/newProduct/NewProduct";
import { Login } from "./pages/login/Login";
import AuthRoute from "./util/AuthRoute";
import ProtectRoute from "./util/ProtectRoute";

function App() {
  const { currentUser } = useSelector((state) => state.login);

  const [sidemenu, setSidemenu] = useState(false);
  const openSidemenu = () => setSidemenu(!sidemenu);

  return (
    <Router>
      <Switch>
        <ProtectRoute path="/login" component={Login} />
        {currentUser ? (
          <>
            <TopBar openSidemenu={openSidemenu} />
            <div className="container">
              <Sidemenu openSidemenu={openSidemenu} sidemenu={sidemenu} />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products" component={ProductList} />

              <Route path="/product/:productId">
                <SingleProduct />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </>
        ) : (
          <Redirect from="/" to="login" />
        )}
      </Switch>
    </Router>
  );
}

export default App;
