import React, { Component } from "react";
import formatCurrency from "../utilities/util";
import { Link } from "react-router-dom";
import SweetAlert from "sweetalert2-react";

export default class Products extends Component {
  state = {
    show: false,
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

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            {this.props.products.map((product, index) => (
              <div className="col-md-4 my-5" key={index}>
                <div className="card card-cascade  bg-dark ">
                  <Link
                    to={"/shop/" + product.id}
                    className="view view-cascade overlay"
                  >
                    <img className="card-img-top" src={product.image} alt="" />

                    <div className="mask rgba-white-slight"></div>
                  </Link>

                  <div className="card-body card-body-cascade text-center">
                    <h4 className="card-title text-white">
                      <strong>
                        <Link to={"/shop/" + product.id}>{product.title}</Link>
                      </strong>
                    </h4>

                    <p className="card-text text-white">
                      {product.description}
                    </p>

                    <div className="card-footer">
                      <span className="float-left">
                        <span className="discount">
                          {formatCurrency(product.price)}
                        </span>
                      </span>
                      <span className="float-right">
                        <span
                          className="btn btn-success"
                          onClick={() => {
                            this.addToCart(product);
                          }}
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="fas fa-cart-plus"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
