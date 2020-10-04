import React from "react";
import "bootstrap/dist/css/bootstrap.css";


class About extends React.Component {
  render() {
    return (
      <>
        <section className="about spad">
        
            <div className="container">
              <div className="row">
                <div className="col-lg-12 m-5">
                  <div className="about_header">
                    <h1 className="text-white text-center display-3">
                      About Us
                    </h1>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="about__pic">
                    <img src="images/about/about-us.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="about__item">
                    <h4 className="text-white">Who We Are ?</h4>
                    <p className="text-white">
                      Contextual advertising programs sometimes have strict
                      policies that need to be adhered too. Let’s take Google as
                      an example.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="about__item">
                    <h4 className="text-white">Who We Do ?</h4>
                    <p className="text-white">
                      In this digital generation where information can be easily
                      obtained within seconds, business cards still have
                      retained their importance.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="about__item">
                    <h4 className="text-white">Why Choose Us</h4>
                    <p className="text-white">
                      A two or three storey house is the ideal way to maximise
                      the piece of earth on which our home sits, but for older
                      or infirm people.
                    </p>
                  </div>
                </div>
              </div>
            </div>
       
        </section>

        <section className="counter spad pt-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <span style={{ fontSize: 2.6 + "rem" }}>statistics</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__number">
                    <h2 className="cn_num text-white">102</h2>
                  </div>
                  <span className="text-white">
                    Our <br />
                    Clients
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__number">
                    <h2 className="cn_num text-white">30</h2>
                  </div>
                  <span className="text-white">
                    Total <br />
                    Categories
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__number">
                    <h2 className="cn_num text-white">102</h2>
                  </div>
                  <span className="text-white">
                    In <br />
                    Country
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__number">
                    <h2 className="cn_num text-white">98</h2>
                    <strong className="text-white">%</strong>
                  </div>
                  <span className="text-white">
                    Happy <br />
                    Customer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <span style={{ fontSize: 2.6 + "rem" }}>Our Team</span>
                  <h2 className="text-white">Meet Our Team</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item">
                  <img
                    className="rounded"
                    src="images/about/team-1.jpg"
                    alt=""
                  />
                  <h4 className="font-weight-bold text-white">Ahmed Mostafa</h4>
                  <span>Front-End</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item">
                  <img
                    className="rounded"
                    src="images/about/team-2.jpg"
                    alt=""
                  />
                  <h4 className="font-weight-bold text-white">Ahmed Mostafa</h4>
                  <span>Front-End</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item">
                  <img
                    className="rounded"
                    src="images/about/team-3.jpg"
                    alt=""
                  />
                  <h4 className="font-weight-bold text-white">Ahmed Mostafa</h4>
                  <span>Front-End</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item">
                  <img
                    className="rounded"
                    src="images/about/team-4.jpg"
                    alt=""
                  />
                  <h4 className="font-weight-bold text-white">Ahmed Mostafa</h4>
                  <span>Front-End</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="clients spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <span style={{ fontSize: 2.6 + "rem" }}>Partner</span>
                  <h2 className="text-white">Happy Clients</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="/" className="client__item">
                  <img src="images/clients/client-1.png" alt="" />
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="/" className="client__item">
                  <img src="images/clients/client-8.png" alt="" />
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="/" className="client__item">
                  <img src="images/clients/client-3.png" alt="" />
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="/" className="client__item">
                  <img src="images/clients/client-4.png" alt="" />
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="/" className="client__item">
                  <img src="images/clients/client-5.png" alt="" />
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="/" className="client__item">
                  <img src="images/clients/client-6.png" alt="" />
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="/" className="client__item">
                  <img src="images/clients/client-7.png" alt="" />
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="/" className="client__item">
                  <img src="images/clients/client-8.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default About;
