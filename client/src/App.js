import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import SingleProduct from "./components/SingleProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";
import TopBar from "./components/TopBar";

function App() {
  return (
    <Router>
      <TopBar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/product" component={Products} />
      <Route exact path="/posts/:id" component={SingleProduct} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/success" component={Success} />
    </Router>
  );
}

export default App;
