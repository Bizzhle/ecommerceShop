import React from "react";
import "./app.css";
import Sidemenu from "./components/sidemenu/Sidemenu";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/products/ProductList";
import SingleProduct from "./pages/product/SingleProduct";
import NewProduct from "./pages/newProduct/NewProduct";
import { Login } from "./pages/login/Login";

function App() {
  // const admin = useSelector((state) => state.login.currentUser.user.isAdmin);
  // const user = useSelector((state) => state.login.currentUser.user);

  // console.log(admin);
  // console.log(user);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {/* {admin && ( */}
        <>
          <TopBar />
          <div className="container">
            <Sidemenu />
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
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <SingleProduct />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
          </div>
        </>
        {/* )} */}
      </Switch>
    </Router>
  );
}

export default App;
