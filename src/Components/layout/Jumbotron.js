import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark  rounded">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal text-white">
              Hello World !
            </h1>
            <p
              className="lead font-weight-normal text-white"
              style={{ fontSize: 1.5 + "rem" }}
            >
              Welcome With React Final Project Simple E-commerce Functionality
            </p>
            <a className="btn btn-outline-secondary text-white p-3" href="/">
              Coming soon
            </a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </>
    );
  }
}
export default Jumbotron;
