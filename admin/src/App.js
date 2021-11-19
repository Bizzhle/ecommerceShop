import React from "react";
import "./app.css";
import Sidemenu from "./components/sidemenu/Sidemenu";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
// import { Route, Switch } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidemenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
