import React, { Component } from "react";
import formatCurrency from "../utilities/util";
import { Link } from "react-router-dom";
export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
        cart: {},
    };
  }
  componentDidMount() {
    this.setState({
      cart: JSON.parse(localStorage.getItem("cart")),
    });
  }
  removeItem(index) {
    let Data = [...this.state.cart];
    Data.splice(index, 1);
    this.setState({
        cart: Data,

    });
    localStorage.setItem("cart", JSON.stringify(Data));
  }
  onChange(index, e) {
    let Data = [...this.state.cart];
    Data[index].quantity = e.target.value;
    this.setState({
      cart: Data,
    });
    localStorage.setItem("cart", JSON.stringify(Data));
  }
  total() {
    let total = 0;
    this.state.cart.forEach((el) => {
      total += el.price * el.quantity;
    });
      return total.toFixed(2);
  }

  render() {
    return (
        <>
            {!this.state.cart.length<=0 ? (
                <section className="shopping-cart spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="shopping__cart__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="text-white">Product</th>
                                                <th className="text-white">Quantity</th>
                                                <th className="text-white">Total</th>
                                                <th className="text-white"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.cart.map((product, index) => (
                                                <tr key={index}>
                                                    <td className="product__cart__item">
                                                        <div className="product__cart__item__pic">
                                                            <img
                                                                className="rounded"
                                                                src={product.image}
                                                                alt=""
                                                                width="50"
                                                            />
                                                        </div>
                                                        <div className="product__cart__item__text">
                                                            <h6 className="text-white">{product.title}</h6>
                                                        </div>
                                                    </td>
                                                    <td className="quantity__item">
                                                        <div className="quantity">
                                                            <div className="pro-qty-2">
                                                                <input
                                                                    className="bg-dark text-white"
                                                                    type="number"
                                                                    onChange={this.onChange.bind(this, index)}
                                                                    value={product.quantity}
                                                                    min="1"
                                                                    max="500"
                                                                />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="cart__price text-white">
                                                        {formatCurrency(product.price)}
                                                    </td>
                                                    <td className="cart__close text-white">
                                                        <button
                                                            className="btn button-transparent text-white"
                                                            onClick={() => {
                                                                this.removeItem(index);
                                                            }}
                                                        >
                                                            <i className="fas fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="continue__btn">
                                            <Link to="/shop" className="text-white">Continue Shopping</Link>
                                        </div>
                                    </div>
                                                            
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cart__total">
                                    <h6>Cart total</h6>
                                    <ul>
                    
                                        <li>
                                            Total <span>$ {this.total()}</span>
                                        </li>
                                    </ul>
                                    <a href="/" className="primary-btn">
                                        Proceed to checkout
                  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ):<p className="text-white display-2 text-center p-5 m-5">No Item Add To Cart</p>}
      </>
    );
  }
}
