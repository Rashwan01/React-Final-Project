import React from "react";
import { Link } from "react-router-dom";
let InitialState = {
  name: "",
  email: "",
  password: "",
  NameErrors: "",
  EmailErrors: "",
  PasswordErrors: "",
};
class Register extends React.Component {
  state = InitialState;
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      
    });
  };
  validate = () => {
    let PasswordErrors = "",
      NameErrors = "",
      EmailErrors = "";
    if (this.state.name.length <= 0) {
      NameErrors = "Name Is Required";
    }
    if (this.state.password.length <= 0) {
      PasswordErrors = "Password Is Required";
    }
    if (this.state.email.length <= 0) {
      EmailErrors = "Email Is Required";
    }
    else if (
      !new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
        this.state.email
      )
    ) {
      EmailErrors = "Email Is Not Valid";
    }
    if (PasswordErrors || EmailErrors || NameErrors) {
      this.setState({
        PasswordErrors,
        EmailErrors,
        NameErrors,
      });
      return false;
    }
    return true;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(InitialState);
      alert("valid Information");
    }
  };
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row ">
            <form
              className="form-signin mx-auto w-450 text-center my-5"
              onSubmit={this.handleSubmit}
            >
              <img
                className="mb-4 text-center mx-auto"
                src="/logo192.png"
                alt=""
                width="72"
                height="72"
              />
              <h1 className="h3 mb-3 font-weight-normal text-white text-center">
                Please sign in
              </h1>
              <div className="form-group">
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Full Name"
                  autoComplete="username"
                  required=""
                  autoFocus=""
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                {this.state.NameErrors ? (
                  <p
                    className="text-danger font-weight-bold text-left text"
                    style={{ fontSize: "12px" }}
                  >
                    {this.state.NameErrors}
                  </p>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail" className="sr-only">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email address"
                  autoComplete="username"
                  required=""
                  autoFocus=""
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                {this.state.EmailErrors ? (
                  <p
                    className="text-danger font-weight-bold text-left text"
                    style={{ fontSize: "12px" }}
                  >
                    {this.state.EmailErrors}
                  </p>
                ) : null}
              </div>
              <div className="form-group">
                <label autoFocus="inputPassword" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                  autoComplete="new-password"
                  required=""
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                {this.state.PasswordErrors ? (
                  <p
                    className="text-danger font-weight-bold text-left text"
                    style={{ fontSize: "12px" }}
                  >
                    {this.state.PasswordErrors}
                  </p>
                ) : null}
              </div>
              <div className="form-group text-left">
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
              </div>
              <button
                className="btn btn-lg btn-success btn-block"
                type="submit"
              >
                Sign Up
              </button>
              <Link
                to="/login"
                className="text-white mt-2 text-muted "
                type="submit"
              >
                Sign in ?
              </Link>

              <p className="mt-5 mb-3 text-muted">© 2017-2020</p>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Register;
