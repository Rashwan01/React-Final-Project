import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Components/layout/header";
import Footer from "../Components/layout/footer";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Products from "../Pages/Shop/index";
import Product from "../Pages/Shop/show";
import Cart from "../Pages/Cart";

let AppRouter = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Register" exact component={Register} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/shop" exact component={Products} />
      <Route path="/shop/:id" exact component={Product} />
      <Footer />
    </Router>
  );
};
export default AppRouter;
