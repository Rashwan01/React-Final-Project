import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import data from "../../data/products.json";
import SweetAlert from "sweetalert2-react";
import { Redirect } from "react-router-dom";
class Product extends React.Component {
  state = {
    product: [],
    show: false,
    productNotFound: false,
  };
  addToCart(product) {
    let lists = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    let isExist = false;

    if (lists.length <= 0) {
      lists.push({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
      });
    } else {
      lists.forEach((element, index) => {
        if (element.id === product.id) {
          isExist = true;
          lists[index].quantity++;
        }
      });
      if (!isExist) {
        lists.push({
          id: product.id,
          title: product.title,
          image: product.image,
          quantity: 1,
          price: product.price,
        });
      }
    }
    this.setState({
      show: true,
    });
    localStorage.setItem("cart", [JSON.stringify(lists)]);
  }
  componentWillMount() {
    data.products.forEach((element) => {
      if (element.id === this.props.match.params.id) {
        this.setState({
          product: element,
          productNotFound: true,
        });
      }
    });
  }

  render() {
    return (
      <>
        {this.state.productNotFound ? (
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 text-center mt-5">
                <img
                  src={this.state.product.image}
                  className="img-fluid rounded"
                  alt="Responsive "
                  width="400"
                />
              </div>

              <div className="col-md-6">
                <h1 className="text-white my-2">Product Info</h1>
                <table className="table table-striped table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Product name</th>
                      <th scope="col">{this.state.product.title}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="col">Product Description</th>
                      <th scope="col">{this.state.product.description}</th>
                    </tr>
                    <tr>
                      <th scope="col">Product Price</th>
                      <th scope="col"> {this.state.product.price} $</th>
                    </tr>
                    <tr>
                      <th scope="col">Size</th>
                      <th scope="col">
                        {this.state.product.availableSizes.map(
                          (size, index) => size + " - "
                        )}
                      </th>
                    </tr>
                    <tr>
                      <th scope="col">Colors</th>
                      <th scope="col">
                        {this.state.product.colors.map(
                          (color, index) => color + " - "
                        )}
                      </th>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="btn btn-primary btn-lg my-4"
                  onClick={() => {
                    this.addToCart(this.state.product);
                  }}
                >
                  {" "}
                  add To Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Redirect to="/shop" />
        )}

        <SweetAlert
          show={this.state.show} 
          title="Success"
          text="Product Add To cart"
          onConfirm={() => this.setState({ show: false })}
        />
      </>
    );
  }
}
export default Product;
