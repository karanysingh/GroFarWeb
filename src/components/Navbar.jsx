import React from 'react';
import { Link, Router, BrowserRouter} from 'react-router-dom';

export default function Navbar(){
    return(
        <div>
<div class="bg-white shadow-sm osahan-main-nav">
<nav class="navbar navbar-expand-lg navbar-light bg-white osahan-header py-0 container">
<a class="navbar-brand mr-0" href="/home"><img class="img-fluid logo-img rounded-pill border shadow-sm" src="img/logo.svg"></img></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="ml-3 d-flex align-items-center">
<div class="dropdown mr-3">
        <a class="text-dark dropdown-toggle d-flex align-items-center osahan-location-drop" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div><i class="icofont-location-pin d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm mr-2"></i></div>
                <div>
                <p class="text-muted mb-0 small">Select Location</p>
                Maharashtra India...
                </div>
        </a>
    <div class="dropdown-menu osahan-select-loaction p-3" aria-labelledby="navbarDropdown">
        <span>Select your city to start shopping</span>
        <form class="form-inline my-2">
            <div class="input-group p-0 col-lg-12">
                <input type="text" class="form-control form-control-sm" id="inlineFormInputGroupUsername2" placeholder="Search Location"></input>
                        <div class="input-group-prepend">
                            <div class="btn btn-success rounded-right btn-sm"><i class="icofont-location-arrow"></i> Detect</div>
                        </div>
                
            </div>
        </form>
        <div class="city pt-2">
                <h6>Top Citys</h6>
                    <p class="border-bottom m-0 py-1"><a href="#" class="text-dark">Banglore</a></p>
                    <p class="border-bottom m-0 py-1"><a href="#" class="text-dark">Noida</a></p>
                    <p class="border-bottom m-0 py-1"><a href="#" class="text-dark">Delhi</a></p>
                    <p class="m-0 py-1"><a href="#" class="text-dark">Mumbai</a></p>
        </div>
    </div>
</div>

<div class="input-group mr-sm-2 col-lg-12">
<input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Search for Products.."></input>
<div class="input-group-prepend">
<div class="btn btn-success rounded-right"><i class="icofont-search"></i></div>
</div>
</div>
</div>
<div class="ml-auto d-flex align-items-center">

<a href="#" data-toggle="modal" data-target="#login" class="mr-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
<i class="icofont-login"></i>
</a>
<div class="dropdown mr-3">
            <a
              href="#"
              class="dropdown-toggle text-dark"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="img/user.png"
                class="img-fluid rounded-circle header-user mr-2"
              />
              Hi Osahan
            </a>
            <div
              class="dropdown-menu dropdown-menu-right top-profile-drop"
              aria-labelledby="dropdownMenuButton"
            >
              <a class="dropdown-item" href="/myaccount">My account</a>
              <a class="dropdown-item" href="/promos">Promos</a>
              <a class="dropdown-item" href="/myaddress">My address</a>
              <a class="dropdown-item" href="/help_support"
                >Help & support</a
              >
              <a class="dropdown-item" href="/signin">Logout</a>
            </div>
          </div>
<div class="dropdown">
<a href="#" class="text-dark dropdown-toggle not-drop" id="dropdownMenuNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<i class="icofont-notification d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm">

</i>
</a>

<div class="dropdown-menu dropdown-menu-right p-0 osahan-notifications-main" aria-labelledby="dropdownMenuNotification">

<div class="osahan-notifications bg-white border-bottom p-2">
<div class="position-absolute ml-n1 py-2"><i class="icofont-check-circled text-white bg-success rounded-pill p-1"></i></div>
<a href="status_complete.html" class="text-decoration-none text-dark">
<div class="notifiction small">
<div class="ml-3">
<p class="font-weight-bold mb-1">Yay! Order Complete</p>
<p class="small m-0"><i class="icofont-ui-calendar"></i> Today, 05:14 AM</p>
</div>
</div>
</a>
</div>

<div class="osahan-notifications bg-white border-bottom p-2">
<a href="status_onprocess.html" class="text-decoration-none text-muted">
<div class="notifiction small">
<div class="ml-3">
<p class="font-weight-bold mb-1">Yipiee. order Success</p>
<p class="small m-0"><i class="icofont-ui-calendar"></i> Monday, 08:30 PM</p>
</div>
</div>
</a>
</div>

<div class="osahan-notifications bg-white p-2">
<a href="status_onprocess.html" class="text-decoration-none text-muted">
<div class="notifiction small">
<div class="ml-3">
<p class="font-weight-bold mb-1">New Promos Coming</p>
<p class="small m-0"><i class="icofont-ui-calendar"></i> Sunday, 10:30 AM</p>
</div>
</div>
</a>
</div>
</div>
</div>

<a href="/cart" class="ml-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
<i class="icofont-shopping-cart"></i>
</a>
</div>
</nav>

<div class="bg-color-head">
<div class="container menu-bar d-flex align-items-center">
<ul class="list-unstyled form-inline mb-0">
<li class="nav-item active">
<a class="nav-link text-white pl-0" href="/home">Home <span class="sr-only">(current)</span></a>
</li>
<li class="nav-item dropdown">
<a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Products
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
<a class="dropdown-item" href="/product_details">Detail</a>
<div class="dropdown-divider"></div>
<a class="dropdown-item" href="/trending">Trending</a>
<a class="dropdown-item" href="/recommended">Recommended</a>
<a class="dropdown-item" href="/popular">Most Popular</a>
</div>
</li>
<li class="nav-item dropdown">
<a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Checkout Process
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
<a class="dropdown-item" href="/cart">Cart</a>
<a class="dropdown-item" href="/checkout">Checkout</a>
<a class="dropdown-item" href="/successful">Successful</a>
</div>
</li>
<li class="nav-item dropdown">
<a class="nav-link text-white dropdown-toggle" href="/myorder" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
My Order
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
<a class="dropdown-item" href="/myorder">My order</a>
<a class="dropdown-item" href="status_complete.html">Status Complete</a>
<a class="dropdown-item" href="status_onprocess.html">Status on Process</a>
<a class="dropdown-item" href="status_canceled.html">Status Canceled</a>
<a class="dropdown-item" href="/review">Review</a>
</div>
</li>
</ul>
<div class="list-unstyled form-inline mb-0 ml-auto">
<a href="/trending" class="text-white px-3 py-2">Trending</a>
<a href="/promos" class="text-white bg-offer px-3 py-2"><i class="icofont-sale-discount h6"></i>Promos</a>
</div>
</div>
</div>
</div>

<nav aria-label="breadcrumb" class="breadcrumb mb-0 d-none">
        <div class="container">
                <ol class="d-flex align-items-center mb-0 p-0">
                    <li class="breadcrumb-item"><a href="#" class="text-success">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page"></li>
                </ol>
        </div>
</nav>
</div>
    );
}