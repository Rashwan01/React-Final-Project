import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import data from "../../data/products.json";
import Products from "../../Components/Products";

class Shop extends React.Component {
  state = {
    products: data.products,
    cartItems: [],
    size: "",
    sort: "",
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>

            <div className="col-md-12 text-left">
              <h1 className="text-white display-2 my-2">Shop</h1>
            </div>
            <Products
              products={this.state.products}
              addToCart={this.addToCart}
            />
          </div>
        </div>
      </>
    );
  }
}
export default Shop;
