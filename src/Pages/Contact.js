import React from "react";
import "bootstrap/dist/css/bootstrap.css";
let InitialState = {
  name: "",
  email: "",
  message:"",
  NameErrors: "",
  EmailErrors: "",
  MessageErrors:""
};
class Contact extends React.Component {
  state = InitialState;
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  validate = () => {
    let NameErrors = "",
      EmailErrors = "",
      MessageErrors="";
    if (this.state.message.length <= 0) {
      MessageErrors = "message Is Required";
    }
    if (this.state.name.length <= 0) {
      NameErrors = "Name Is Required";
    }
    if (this.state.email.length <= 0) {
      EmailErrors = "Email Is Required";
    }
    if (
      !new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
        this.state.email
      )
    ) {
      EmailErrors = "Email Is Not Valid";
    }
    if (NameErrors || EmailErrors || MessageErrors) {
      this.setState({
        EmailErrors,
        NameErrors,
        MessageErrors,
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
        <section className="contact spad pl-5 pr-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="contact__text">
                  <div className="section-title text-white text-left">
                    <span>Information</span>
                    <h2>Contact Us</h2>
                    <p className="text-white text-left">
                      As you might expect of a company that began as a high-end
                      interiors contractor, we pay strict attention.
                    </p>
                  </div>
                  <ul className="text-white">
                    <li>
                      <h4 className="text-white">America</h4>
                      <p>
                        195 E Parker Square Dr, Parker, CO 801 <br />
                        +43 982-314-0958
                      </p>
                    </li>
                    <li>
                      <h4 className="text-white">France</h4>
                      <p>
                        109 Avenue Léon, 63 Clermont-Ferrand <br />
                        +12 345-423-9893
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="contact__form">
                  <form action="#" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="bg-dark"
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
                      <div className="col-lg-6">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email"
                          className="bg-dark"
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
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Message"
                          className="bg-dark"
                          value={this.state.message}
                          onChange={this.handleChange}
                        ></textarea>

                        {this.state.MessageErrors ? (
                          <p
                            className="text-danger font-weight-bold text-left text"
                            style={{ fontSize: "12px" }}
                          >
                            {this.state.MessageErrors}
                          </p>
                        ) : null}
                        <button type="submit" className="btn-info">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Contact;
