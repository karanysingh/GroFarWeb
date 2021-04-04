import React from "react";

import { Route, BrowserRouter, Link,Switch,Router  } from "react-router-dom";
export default function Footer() {
    return(
  <footer class="section-footer border-top bg-white">
    <section class="footer-top py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="form-inline">
              <select class="custom-select mr-2">
                <option>USD</option>
                <option>EUR</option>
                <option>RUBL</option>
              </select>
              <select class="custom-select">
                <option>United States</option>
                <option>Russia</option>
                <option>Uzbekistan</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <form>
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Email"
                  class="form-control"
                  name=""
                />
                <span class="input-group-append">
                  <button type="submit" class="btn btn-success">
                    Subscribe
                  </button>
                </span>
              </div>
            </form>
          </div>
          <div class="col-md-4 text-md-right">
            <Link to="#" class="btn btn-icon btn-light">
              <i class="icofont-facebook"></i>
            </Link>
            <Link to="#" class="btn btn-icon btn-light">
              <i class="icofont-twitter"></i>
            </Link>
            <Link to="#" class="btn btn-icon btn-light">
              <i class="icofont-instagram"></i>
            </Link>
            <Link to="#" class="btn btn-icon btn-light">
              <i class="icofont-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section class="footer-main border-top pt-5 pb-4">
      <div class="container">
        <div class="row">
          <aside class="col-md">
            <h6 class="title">Products</h6>
            <ul class="list-unstyled list-padding">
              <li>
                <Link to="/listing" class="text-dark">
                  Listing
                </Link>
              </li>
              <li>
                <Link to="/details" class="text-dark">
                  Detail
                </Link>
              </li>
              <li>
                <Link to="/trending" class="text-dark">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/recommended" class="text-dark">
                  Recommended
                </Link>
              </li>
              <li>
                <Link to="/popular" class="text-dark">
                  Most Popular
                </Link>
              </li>
            </ul>
          </aside>
          <aside class="col-md">
            <h6 class="title">Checkout Process</h6>
            <ul class="list-unstyled list-padding">
              <li>
                <Link to="/cart" class="text-dark">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/cart" class="text-dark">
                  Order Address
                </Link>
              </li>
              <li>
                <Link to="/cart" class="text-dark">
                  Delivery Time
                </Link>
              </li>
              <li>
                <Link to="/cart" class="text-dark">
                  Order Payment
                </Link>
              </li>
              <li>
                <Link to="/checkout" class="text-dark">
                  Checkout
                </Link>
              </li>
              <li>
                <Link to="/successful" class="text-dark">
                  Successful
                </Link>
              </li>
            </ul>
          </aside>
          <aside class="col-md">
            <h6 class="title">My Order</h6>
            <ul class="list-unstyled list-padding">
              <li>
                <Link to="my_order" class="text-dark">
                  My order
                </Link>
              </li>
              <li>
                <Link to="status_complete" class="text-dark">
                  Status Complete
                </Link>
              </li>
              <li>
                <Link to="status_onprocess" class="text-dark">
                  Status on Process
                </Link>
              </li>
              <li>
                <Link to="status_canceled" class="text-dark">
                  Status Canceled
                </Link>
              </li>
              <li>
                <Link to="review" class="text-dark">
                  Review
                </Link>
              </li>
            </ul>
          </aside>
          <aside class="col-md">
            <h6 class="title">My Account</h6>
            <ul class="list-unstyled list-padding">
              <li>
                <Link class="text-dark" href="my_account">
                  {" "}
                  My account
                </Link>
              </li>
              <li>
                <Link class="text-dark" href="promos">
                  {" "}
                  Promos
                </Link>
              </li>
              <li>
                <Link class="text-dark" href="my_address">
                  {" "}
                  My address
                </Link>
              </li>
              <li>
                <Link class="text-dark" href="terms_conditions">
                  Terms &amp; conditions
                </Link>
              </li>
              <li>
                <Link class="text-dark" href="help_support">
                  Help &amp; support
                </Link>
              </li>
              <li>
                <Link class="text-dark" href="help_ticket">
                  {" "}
                  Help ticket
                </Link>
              </li>
              <li>
                <Link class="text-dark" href="signin">
                  {" "}
                  Logout
                </Link>
              </li>
            </ul>
          </aside>
          <aside class="col-md">
            <h6 class="title">Extra Pages</h6>
            <ul class="list-unstyled list-padding">
              <li>
                <Link to="promo_details" class="text-dark">
                  Promo Details
                </Link>
              </li>
              <li>
                <Link to="terms_conditions" class="text-dark">
                  Conditions
                </Link>
              </li>
              <li>
                <Link to="help_support" class="text-dark">
                  Help Support
                </Link>
              </li>
              <li>
                <Link to="refund_payment" class="text-dark">
                  Refund Payment
                </Link>
              </li>
              <li>
                <Link to="faq" class="text-dark">
                  {" "}
                  FAQ{" "}
                </Link>
              </li>
              <li>
                <Link to="signin" class="text-dark">
                  {" "}
                  Sign In{" "}
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>

    <section class="footer-bottom border-top py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <span class="pr-2">© 2020 Grofarweb</span>
            <span class="pr-2">
              <Link to="/privacy" class="text-dark">
                Privacy
              </Link>
            </span>
            <span class="pr-2">
              <Link to="/terms%26conditions" class="text-dark">
                Terms & Conditions
              </Link>
            </span>
          </div>
          <div class="col-md-6 text-md-right">
            <Link to="#">
              <img src="img/appstore.png" height="30" ></img>
            </Link>
            <Link to="#">
              <img src="img/playmarket.png" height="30" ></img>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <div
      class="modal fade right-modal"
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header p-0">
            <nav class="schedule w-100">
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <Link
                  class="nav-link active col-5 py-4"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <p class="mb-0 font-weight-bold">Sign in</p>
                </Link>
                <Link
                  class="nav-link col-5 py-4"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <p class="mb-0 font-weight-bold">Sign up</p>
                </Link>
                <Link
                  class="nav-link col-2 p-0 d-flex align-items-center justify-content-center"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <h1 class="m-0 h4 text-dark">
                    <i class="icofont-close-line"></i>
                  </h1>
                </Link>
              </div>
            </nav>
          </div>
          <div class="modal-body p-0">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div class="osahan-signin p-4 rounded">
                  <div class="p-2">
                    <h2 class="my-0">Welcome Back</h2>
                    <p class="small mb-4">Sign in to Continue.</p>
                    <form action="https://askbootstrap.com/preview/grofarweb/verification.html">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input
                          placeholder="Enter Email"
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        ></input>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          placeholder="Enter Password"
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                        ></input>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-success btn-lg rounded btn-block"
                      >
                        Sign in
                      </button>
                    </form>
                    <p class="text-muted text-center small m-0 py-3">or</p>
                    <Link
                      href="verification"
                      class="btn btn-dark btn-block rounded btn-lg btn-apple"
                    >
                      <i class="icofont-brand-apple mr-2"></i> Sign up with
                      Apple
                    </Link>
                    <Link
                      href="verification"
                      class="btn btn-light border btn-block rounded btn-lg btn-google"
                    >
                      <i class="icofont-google-plus text-danger mr-2"></i>
                      Sign up with Google
                    </Link>
                    <p class="text-center mt-3 mb-0">
                      <Link to="signup" class="text-dark">
                        Don't have an account? Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div class="osahan-signup bg-white p-4">
                  <div class="p-2">
                    <h2 class="my-0">Let's get started</h2>
                    <p class="small mb-4">
                      Create account to see our top picks for you!
                    </p>
                    <form action="https://askbootstrap.com/preview/grofarweb/verification.html">
                      <div class="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input
                          placeholder="Enter Name"
                          type="text"
                          class="form-control"
                          id="exampleInputName1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputNumber1">Phone Number</label>
                        <input
                          placeholder="Enter Phone Number"
                          type="number"
                          class="form-control"
                          id="exampleInputNumber1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input
                          placeholder="Enter Email"
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          placeholder="Enter Password"
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword2">
                          Confirmation Password
                        </label>
                        <input
                          placeholder="Enter Confirmation Password"
                          type="password"
                          class="form-control"
                          id="exampleInputPassword2"
                        />
                      </div>
                      <button
                        type="submit"
                        class="btn btn-success rounded btn-lg btn-block"
                      >
                        Create Account
                      </button>
                    </form>
                    <p class="text-muted text-center small py-2 m-0">or</p>
                    <Link
                      href="verification"
                      class="btn btn-dark btn-block rounded btn-lg btn-apple"
                    >
                      <i class="icofont-brand-apple mr-2"></i> Sign up with
                      Apple
                    </Link>
                    <Link
                      href="verification"
                      class="btn btn-light border btn-block rounded btn-lg btn-google"
                    >
                      <i class="icofont-google-plus text-danger mr-2"></i>
                      Sign up with Google
                    </Link>
                    <p class="text-center mt-3 mb-0">
                      <Link to="signin" class="text-dark">
                        Already have an account! Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer p-0 border-0">
            <div class="col-6 m-0 p-0">
              <Link
                href="#"
                class="btn border-top border-right btn-lg btn-block"
                data-dismiss="modal"
              >
                Close
              </Link>
            </div>
            <div class="col-6 m-0 p-0">
              <Link
                href="help_support"
                class="btn border-top btn-lg btn-block"
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
