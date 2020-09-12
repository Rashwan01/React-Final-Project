import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Components/layout/header";
import Footer from "../Components/layout/footer";
import Home from "../Components/Home";


let AppRouter = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Footer />
    </Router>
  );
};
export default AppRouter;
