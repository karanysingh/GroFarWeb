import React from 'react';

export default function Navbar(){
    return(
        <div>
<div className="bg-white shadow-sm osahan-main-nav">
<nav className="navbar navbar-expand-lg navbar-light bg-white osahan-header py-0 container">
<a className="navbar-brand mr-0" href="/home"><img className="img-fluid logo-img rounded-pill border shadow-sm" src="img/logo.svg"></img></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="ml-3 d-flex align-items-center">
<div className="dropdown mr-3">
        <a className="text-dark dropdown-toggle d-flex align-items-center osahan-location-drop" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div><i className="icofont-location-pin d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm mr-2"></i></div>
                <div>
                <p className="text-muted mb-0 small">Select Location</p>
                Maharashtra India...
                </div>
        </a>
    <div className="dropdown-menu osahan-select-loaction p-3" aria-labelledby="navbarDropdown">
        <span>Select your city to start shopping</span>
        <form className="form-inline my-2">
            <div className="input-group p-0 col-lg-12">
                <input type="text" className="form-control form-control-sm" id="inlineFormInputGroupUsername3" placeholder="Search Location"></input>
                        <div className="input-group-prepend">
                            <div className="btn btn-success rounded-right btn-sm"><i className="icofont-location-arrow"></i> Detect</div>
                        </div>
                
            </div>
        </form>
        <div className="city pt-2">
                <h6>Top Citys</h6>
                    <p className="border-bottom m-0 py-1"><a href="#" className="text-dark">Banglore</a></p>
                    <p className="border-bottom m-0 py-1"><a href="#" className="text-dark">Noida</a></p>
                    <p className="border-bottom m-0 py-1"><a href="#" className="text-dark">Delhi</a></p>
                    <p className="m-0 py-1"><a href="#" className="text-dark">Mumbai</a></p>
        </div>
    </div>
</div>

<div className="input-group mr-sm-2 col-lg-12">
<input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Search for Products.."></input>
<div className="input-group-prepend">
<div className="btn btn-success rounded-right"><i className="icofont-search"></i></div>
</div>
</div>
</div>
<div className="ml-auto d-flex align-items-center">

<a href="#" data-toggle="modal" data-target="#login" className="mr-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
<i className="icofont-login"></i>
</a>
<div className="dropdown mr-3">
            <a
              href="#"
              className="dropdown-toggle text-dark"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="img/user.png"
                className="img-fluid rounded-circle header-user mr-2"
              />
              Hi Osahan
            </a>
            <div
              className="dropdown-menu dropdown-menu-right top-profile-drop"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item" href="/myaccount">My account</a>
              <a className="dropdown-item" href="/promos">Promos</a>
              <a className="dropdown-item" href="/myaddress">My address</a>
              <a className="dropdown-item" href="/help_support"
                >Help & support</a
              >
              <a className="dropdown-item" href="/signin">Logout</a>
            </div>
          </div>
<div className="dropdown">
<a href="#" className="text-dark dropdown-toggle not-drop" id="dropdownMenuNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i className="icofont-notification d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm">

</i>
</a>

<div className="dropdown-menu dropdown-menu-right p-0 osahan-notifications-main" aria-labelledby="dropdownMenuNotification">

<div className="osahan-notifications bg-white border-bottom p-2">
<div className="position-absolute ml-n1 py-2"><i className="icofont-check-circled text-white bg-success rounded-pill p-1"></i></div>
<a href="status_complete.html" className="text-decoration-none text-dark">
<div className="notifiction small">
<div className="ml-3">
<p className="font-weight-bold mb-1">Yay! Order Complete</p>
<p className="small m-0"><i className="icofont-ui-calendar"></i> Today, 05:14 AM</p>
</div>
</div>
</a>
</div>

<div className="osahan-notifications bg-white border-bottom p-2">
<a href="status_onprocess.html" className="text-decoration-none text-muted">
<div className="notifiction small">
<div className="ml-3">
<p className="font-weight-bold mb-1">Yipiee. order Success</p>
<p className="small m-0"><i className="icofont-ui-calendar"></i> Monday, 08:30 PM</p>
</div>
</div>
</a>
</div>

<div className="osahan-notifications bg-white p-2">
<a href="status_onprocess.html" className="text-decoration-none text-muted">
<div className="notifiction small">
<div className="ml-3">
<p className="font-weight-bold mb-1">New Promos Coming</p>
<p className="small m-0"><i className="icofont-ui-calendar"></i> Sunday, 10:30 AM</p>
</div>
</div>
</a>
</div>
</div>
</div>

<a href="/cart" className="ml-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
<i className="icofont-shopping-cart"></i>
</a>
</div>
</nav>

<div className="bg-color-head">
<div className="container menu-bar d-flex align-items-center">
<ul className="list-unstyled form-inline mb-0">
<li className="nav-item active">
<a className="nav-link text-white pl-0" href="/home">Home <span className="sr-only">(current)</span></a>
</li>
<li className="nav-item dropdown">
<a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Products
</a>
<div className="dropdown-menu" aria-labelledby="navbarDropdown">
<a className="dropdown-item" href="/product_details">Detail</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="/trending">Trending</a>
<a className="dropdown-item" href="/recommended">Recommended</a>
<a className="dropdown-item" href="/popular">Most Popular</a>
</div>
</li>
<li className="nav-item dropdown">
<a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Checkout Process
</a>
<div className="dropdown-menu" aria-labelledby="navbarDropdown">
<a className="dropdown-item" href="/cart">Cart</a>
<a className="dropdown-item" href="/checkout">Checkout</a>
<a className="dropdown-item" href="/successful">Successful</a>
</div>
</li>
<li className="nav-item dropdown">
<a className="nav-link text-white dropdown-toggle" href="/myorder" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
My Order
</a>
<div className="dropdown-menu" aria-labelledby="navbarDropdown">
<a className="dropdown-item" href="/myorder">My order</a>
<a className="dropdown-item" href="status_complete.html">Status Complete</a>
<a className="dropdown-item" href="status_onprocess.html">Status on Process</a>
<a className="dropdown-item" href="status_canceled.html">Status Canceled</a>
<a className="dropdown-item" href="/review">Review</a>
</div>
</li>
</ul>
<div className="list-unstyled form-inline mb-0 ml-auto">
<a href="/trending" className="text-white px-3 py-2">Trending</a>
<a href="/promos" className="text-white bg-offer px-3 py-2"><i className="icofont-sale-discount h6"></i>Promos</a>
</div>
</div>
</div>
</div>

<nav aria-label="breadcrumb" className="breadcrumb mb-0 d-none">
        <div className="container">
                <ol className="d-flex align-items-center mb-0 p-0">
                    <li className="breadcrumb-item"><a href="#" className="text-success">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page"></li>
                </ol>
        </div>
</nav>
</div>
    );
}