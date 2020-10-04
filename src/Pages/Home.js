import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import data from "../data/products.json";
import Filter from "../Components/Filter";
import Products from "../Components/Products";

import Jumbotron from "../Components/layout/Jumbotron";
class Home extends React.Component {
  state = {
    products: data.products,
  
  };

  
  render() {
    return (
      <>
        <Jumbotron />
        <main>
          <div className="content">
            <div className="main">
              <Filter />
              <Products
                products={this.state.products}
           
              />
            </div>
            <div className="sidebar">
             
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default Home;
