import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }
  componentWillMount() {
    this.setState({
      cart: JSON.parse(localStorage.getItem("cart")),
    });
  }
  CartCount() {

    return this.state.cart.length;
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Final Project
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item ">
              {" "}
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item ">
              {" "}
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              {" "}
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
            <li className="nav-item ">
              {" "}
              <Link className="nav-link" to="/Register">
                Register
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to="/cart">
                <i className="fas fa-cart-plus"></i>
                <span className="badge badge-warning" id="lblCartCount">
                  {this.CartCount()}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
