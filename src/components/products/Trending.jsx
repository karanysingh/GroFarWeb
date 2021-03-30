import React from 'react';

export default function Trending(){
    let picks = [
        {
          discount: "10%",
          image: "img/listing/v1.jpg",
          title: "Chilli",
          price: "0.8/kg",
        },
        {
          discount: "5%",
          image: "img/listing/v2.jpg",
          title: "Onion",
          price: "1.8/kg",
        },
        {
          discount: "8%",
          image: "img/listing/v3.jpg",
          title: "Cauliflower",
          price: "1.8/kg",
        },
        {
          discount: "12%",
          image: "img/listing/v4.jpg",
          title: "Carrot",
          price: "0.8/kg",
        },
        {
          discount: "3%",
          image: "img/listing/v5.jpg",
          title: "Tomato",
          price: "1/kg",
        },
        {
          discount: "20%",
          image: "img/listing/v6.jpg",
          title: "Cabbage",
          price: "1/kg",
        },
        {
          discount: "50%",
          image: "img/listing/v7.jpg",
          title: "Chilli",
          price: "1.8/kg",
        },
        {
          discount: "10%",
          image: "img/listing/v7.jpg",
          title: "Onion",
          price: "1.8/kg",
        },
      ];
     
return(
<div>
    <nav aria-label="breadcrumb" class="breadcrumb mb-0">
      <div class="container">
        <ol class="d-flex align-items-center mb-0 p-0">
          <li class="breadcrumb-item">
            <a href="#" class="text-success">
              Home
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Trending
          </li>
        </ol>
      </div>
    </nav>
    <div className="container">
    <div class="row">
    <div class="col-lg-12">
      <div class="osahan-home-page">
        <div class="osahan-body">
    <div class="title d-flex align-items-center py-3">
                      <h5 class="m-0">Trending</h5>
                      <div class="m-0 text-center ml-auto">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        class="btn text-muted bg-white mr-2"
                      >
                        <i class="icofont-filter mr-1"></i> Filter
                      </a>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        class="btn text-muted bg-white"
                      >
                        <i class="icofont-signal mr-1"></i> Sort
                      </a>
                    </div>
                    </div>
                    <div class="pick_today">
                      <div class="row">
                        {picks.map((pick) => (
                          <div class="col-6 col-md-3 mb-3">
                            <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                              <div class="list-card-image">
                                <a
                                  href="product_details.html"
                                  class="text-dark"
                                >
                                  <div class="member-plan position-absolute">
                                    <span class="badge m-3 badge-danger">
                                      {pick.discount}
                                    </span>
                                  </div>
                                  <div class="p-3">
                                    <img
                                      src={pick.image}
                                      class="img-fluid item-img w-100 mb-3"
                                    />
                                    <h6>{pick.title}</h6>
                                    <div class="d-flex align-items-center">
                                      <h6 class="price m-0 text-success">
                                        ${pick.price}
                                      </h6>
                                      <a
                                        data-toggle="collapse"
                                        href="#collapseExample1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample1"
                                        class="btn btn-success btn-sm ml-auto"
                                      >
                                        +
                                      </a>
                                      <div
                                        class="collapse qty_show"
                                        id="collapseExample1"
                                      >
                                        <div>
                                          <span class="ml-auto" href="#">
                                            <form
                                              id="myform"
                                              class="cart-items-number d-flex"
                                              method="POST"
                                              action="#"
                                            >
                                              <input
                                                type="button"
                                                value="-"
                                                class="qtyminus btn btn-success btn-sm"
                                                field="quantity"
                                              />
                                              <input
                                                type="text"
                                                name="quantity"
                                                value="1"
                                                class="qty form-control"
                                              />
                                              <input
                                                type="button"
                                                value="+"
                                                class="qtyplus btn btn-success btn-sm"
                                                field="quantity"
                                              />
                                            </form>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                        
                      </div>
                    </div>
                    </div></div></div></div></div></div>
    );
};