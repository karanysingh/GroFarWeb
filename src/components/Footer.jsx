import React from "react";

import { Link  } from "react-router-dom";
export default function Footer() {
    return(
  <footer className="section-footer border-top bg-white">
    <section className="footer-top py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="form-inline">
              <select className="custom-select mr-2">
                <option>USD</option>
                <option>EUR</option>
                <option>RUBL</option>
              </select>
              <select className="custom-select">
                <option>United States</option>
                <option>Russia</option>
                <option>Uzbekistan</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  name=""
                />
                <span className="input-group-append">
                  <button type="submit" className="btn btn-success">
                    Subscribe
                  </button>
                </span>
              </div>
            </form>
          </div>
          <div className="col-md-4 text-md-right">
            <Link to="#" className="btn btn-icon btn-light">
              <i className="icofont-facebook"></i>
            </Link>
            <Link to="#" className="btn btn-icon btn-light">
              <i className="icofont-twitter"></i>
            </Link>
            <Link to="#" className="btn btn-icon btn-light">
              <i className="icofont-instagram"></i>
            </Link>
            <Link to="#" className="btn btn-icon btn-light">
              <i className="icofont-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="footer-main border-top pt-5 pb-4">
      <div className="container">
        <div className="row">
          <aside className="col-md">
            <h6 className="title">Products</h6>
            <ul className="list-unstyled list-padding">
              <li>
                <Link to="/listing" className="text-dark">
                  Listing
                </Link>
              </li>
              <li>
                <Link to="/details" className="text-dark">
                  Detail
                </Link>
              </li>
              <li>
                <Link to="/trending" className="text-dark">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/recommended" className="text-dark">
                  Recommended
                </Link>
              </li>
              <li>
                <Link to="/popular" className="text-dark">
                  Most Popular
                </Link>
              </li>
            </ul>
          </aside>
          <aside className="col-md">
            <h6 className="title">Checkout Process</h6>
            <ul className="list-unstyled list-padding">
              <li>
                <Link to="/cart" className="text-dark">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-dark">
                  Order Address
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-dark">
                  Delivery Time
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-dark">
                  Order Payment
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="text-dark">
                  Checkout
                </Link>
              </li>
              <li>
                <Link to="/successful" className="text-dark">
                  Successful
                </Link>
              </li>
            </ul>
          </aside>
          <aside className="col-md">
            <h6 className="title">My Order</h6>
            <ul className="list-unstyled list-padding">
              <li>
                <Link to="my_order" className="text-dark">
                  My order
                </Link>
              </li>
              <li>
                <Link to="status_complete" className="text-dark">
                  Status Complete
                </Link>
              </li>
              <li>
                <Link to="status_onprocess" className="text-dark">
                  Status on Process
                </Link>
              </li>
              <li>
                <Link to="status_canceled" className="text-dark">
                  Status Canceled
                </Link>
              </li>
              <li>
                <Link to="review" className="text-dark">
                  Review
                </Link>
              </li>
            </ul>
          </aside>
          <aside className="col-md">
            <h6 className="title">My Account</h6>
            <ul className="list-unstyled list-padding">
              <li>
                <Link to="/myaccount" className="text-dark" href="my_account">
                  {" "}
                  My account
                </Link>
              </li>
              <li>
                <Link to="/promos" className="text-dark" href="promos">
                  {" "}
                  Promos
                </Link>
              </li>
              <li>
                <Link to="myaddress" className="text-dark" href="my_address">
                  {" "}
                  My address
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-dark" href="terms_conditions">
                  Terms &amp; conditions
                </Link>
              </li>
              <li>
                <Link to="/help_support" className="text-dark" href="help_support">
                  Help &amp; support
                </Link>
              </li>
              <li>
                <Link to="/help_ticket" className="text-dark" href="help_ticket">
                  {" "}
                  Help ticket
                </Link>
              </li>
              <li>
                <Link to="/logout" className="text-dark" href="signin">
                  {" "}
                  Logout
                </Link>
              </li>
            </ul>
          </aside>
          <aside className="col-md">
            <h6 className="title">Extra Pages</h6>
            <ul className="list-unstyled list-padding">
              <li>
                <Link to="promo_details" className="text-dark">
                  Promo Details
                </Link>
              </li>
              <li>
                <Link to="terms_conditions" className="text-dark">
                  Conditions
                </Link>
              </li>
              <li>
                <Link to="help_support" className="text-dark">
                  Help Support
                </Link>
              </li>
              <li>
                <Link to="refund_payment" className="text-dark">
                  Refund Payment
                </Link>
              </li>
              <li>
                <Link to="faq" className="text-dark">
                  {" "}
                  FAQ{" "}
                </Link>
              </li>
              <li>
                <Link to="signin" className="text-dark">
                  {" "}
                  Sign In{" "}
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>

    <section className="footer-bottom border-top py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span className="pr-2">© 2020 Grofarweb</span>
            <span className="pr-2">
              <Link to="/privacy" className="text-dark">
                Privacy
              </Link>
            </span>
            <span className="pr-2">
              <Link to="/terms%26conditions" className="text-dark">
                Terms & Conditions
              </Link>
            </span>
          </div>
          <div className="col-md-6 text-md-right">
            <Link to="#">
              <img alt="appstore" src="img/appstore.png" height="30" ></img>
            </Link>
            <Link to="#">
              <img alt="playmarket" src="img/playmarket.png" height="30" ></img>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <div
      className="modal fade right-modal"
      id="login"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header p-0">
            <nav className="schedule w-100">
              <div  className="nav nav-tabs" id="nav-tab" role="tablist">
                <Link
                  className="nav-link active col-5 py-4"
                  id="nav-home-tab"
                  data-toggle="tab"
                  to="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <p className="mb-0 font-weight-bold">Sign in</p>
                </Link>
                <Link
                  className="nav-link col-5 py-4"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  to="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <p className="mb-0 font-weight-bold">Sign up</p>
                </Link>
                <Link
                  className="nav-link col-2 p-0 d-flex align-items-center justify-content-center"
                  data-dismiss="modal"
                  aria-label="Close"
                  to="/"
                >
                  <h1 className="m-0 h4 text-dark">
                    <i className="icofont-close-line"></i>
                  </h1>
                </Link>
              </div>
            </nav>
          </div>
          <div className="modal-body p-0">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="osahan-signin p-4 rounded">
                  <div className="p-2">
                    <h2 className="my-0">Welcome Back</h2>
                    <p className="small mb-4">Sign in to Continue.</p>
                    {/* <form action="https://askbootstrap.com/preview/grofarweb/verification.html">
                      <div className="form-group">
                        <label htmlfor="exampleInputEmail1">Email</label>
                        <input
                          placeholder="Enter Email"
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        ></input>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          placeholder="Enter Password"
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                        ></input>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success btn-lg rounded btn-block"
                      >
                        Sign in
                      </button>
                    </form> */}
                    <p className="text-muted text-center small m-0 py-3">or</p>
                    <Link
                      to="verification"
                      className="btn btn-dark btn-block rounded btn-lg btn-apple"
                    >
                      <i className="icofont-brand-apple mr-2"></i> Sign up with
                      Apple
                    </Link>
                    <Link
                      to="verification"
                      className="btn btn-light border btn-block rounded btn-lg btn-google"
                    >
                      <i className="icofont-google-plus text-danger mr-2"></i>
                      Sign up with Google
                    </Link>
                    <p className="text-center mt-3 mb-0">
                      <Link to="signup" className="text-dark">
                        Don't have an account? Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="osahan-signup bg-white p-4">
                  <div className="p-2">
                    <h2 className="my-0">Let's get started</h2>
                    <p className="small mb-4">
                      Create account to see our top picks for you!
                    </p>
                    <form action="https://askbootstrap.com/preview/grofarweb/verification.html">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          placeholder="Enter Name"
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          placeholder="Enter Phone Number"
                          type="number"
                          className="form-control"
                          id="exampleInputNumber1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          placeholder="Enter Email"
                          type="email"
                          className="form-control"
                          id="exampleInputEmail2"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          placeholder="Enter Password"
                          type="password"
                          className="form-control"
                          id="exampleInputPassword2"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Confirmation Password
                        </label>
                        <input
                          placeholder="Enter Confirmation Password"
                          type="password"
                          className="form-control"
                          id="exampleInputPassword3"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success rounded btn-lg btn-block"
                      >
                        Create Account
                      </button>
                    </form>
                    <p className="text-muted text-center small py-2 m-0">or</p>
                    <Link
                      to="verification"
                      className="btn btn-dark btn-block rounded btn-lg btn-apple"
                    >
                      <i className="icofont-brand-apple mr-2"></i> Sign up with
                      Apple
                    </Link>
                    <Link
                      to="verification"
                      className="btn btn-light border btn-block rounded btn-lg btn-google"
                    >
                      <i className="icofont-google-plus text-danger mr-2"></i>
                      Sign up with Google
                    </Link>
                    <p className="text-center mt-3 mb-0">
                      <Link to="signin" className="text-dark">
                        Already have an account! Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer p-0 border-0">
            <div className="col-6 m-0 p-0">
              <Link
                to="#"
                className="btn border-top border-right btn-lg btn-block"
                data-dismiss="modal"
              >
                Close
              </Link>
            </div>
            <div className="col-6 m-0 p-0">
              <Link
                to="help_support"
                className="btn border-top btn-lg btn-block"
              >
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>)
}
