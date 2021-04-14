import React, { useEffect, useState } from "react";
const axios = require("axios");




export default function Default() {
  let categories = [
    { listing: "/listing.html", image: "img/categorie/1.svg", title: "Frozen" },
    { listing: "/listing.html", image: "img/categorie/2.svg", title: "Frozen" },
    { listing: "/listing.html", image: "img/categorie/3.svg", title: "Frozen" },
    { listing: "/listing.html", image: "img/categorie/4.svg", title: "Frozen" },
    { listing: "/listing.html", image: "img/categorie/5.svg", title: "Frozen" },
    { listing: "/listing.html", image: "img/categorie/6.svg", title: "Frozen" },
    { listing: "/listing.html", image: "img/categorie/7.svg", title: "Frozen" },
  ];
  let promos = [
    { image: "img/promo1.jpg", link: "/promo_details.html" },
    { image: "img/promo2.jpg", link: "/promo_details.html" },
    { image: "img/promo3.jpg", link: "/promo_details.html" },
    { image: "img/promo4.jpg", link: "/promo_details.html" },
    { image: "img/promo2.jpg", link: "/promo_details.html" },
    { image: "img/promo3.jpg", link: "/promo_details.html" },
  ];
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
  let recommended = [
    {
      title: "Fresh Orange",
      desc: "Orange Great Quality item from Jamaica.",
      price: "1/Kg",
      images: [
        "img/recommend/r1.jpg",
        "img/recommend/r2.jpg",
        "img/recommend/r3.jpg",
      ],
    },{
        title: "Fresh Apple",
        desc: "Fresh Apple Premium item from Thailand",
        price: "1/Kg",
        images: [
          "img/recommend/r7.jpg",
          "img/recommend/r8.jpg",
          "img/recommend/r9.jpg",
        ],
      },{
        title: "Green Apple",
        desc: "Green Apple Premium item from Vietnam.",
        price: "10.8/Kg",
        images: [
          "img/recommend/r4.jpg",
          "img/recommend/r5.jpg",
          "img/recommend/r6.jpg",
        ],
      },
  ];
  
  const products = [];
  const [Products, setProducts] = useState(products);
  const fetchAndUpdate = () =>{
    axios
      .get(
        "https://us-central1-elite-conquest-228205.cloudfunctions.net/app/api/read"
      )
      .then(function (response) {
        // handle success
        // console.log(response);
        const data = response.data;
        setProducts(data);
        // console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      
  }
  useEffect(()=>{
    fetchAndUpdate();
    const interval=setInterval(()=>{
      fetchAndUpdate()
     },2000)
       
       
     return()=>clearInterval(interval)}, []
     );
  return (
    <section className="py-4 osahan-main-body">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="osahan-home-page">
              <div className="osahan-body">
                <div className="pt-3 pb-2 osahan-categories">
                  <div className="d-flex align-items-center mb-2">
                    <h5 clasName="m-0">What do you looking for?</h5>
                    <a
                      href="listing.html"
                      className="ml-auto btn btn-outline-success btn-sm"
                    >
                      See more
                    </a>
                  </div>
                  <div className="categories-slider">
                   {Products.map((product) => {
                      return (
                        <div className="col-c">
                          <div className="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <a href={product.ico}>
                              <img
                                src={product.ico}
                                className="img-fluid px-2 mx-auto"
                              ></img>
                              <p className="m-0 pt-2 text-muted text-center">
                                {product.name}
                              </p>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="py-3 osahan-promos">
                    <div className="d-flex align-items-center mb-3">
                      <h5 className="m-0">Promos for you</h5>
                      <a
                        href="promos.html"
                        className="ml-auto btn btn-outline-success btn-sm"
                      >
                        See more
                      </a>
                    </div>
                    <div className="promo-slider pb-0 mb-0">
                      {promos.map((promo) => {
                        return (
                          <div className="osahan-slider-item mx-2">
                            <a href={promo.link}>
                              <img
                                src={promo.image}
                                className="img-fluid mx-auto rounded"
                                alt="Responsive image"
                              />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                    <div className="title d-flex align-items-center py-3">
                      <h5 className="m-0">Pick's Today</h5>
                      <a
                        className="ml-auto btn btn-outline-success btn-sm"
                        href="picks_today.html"
                      >
                        See more
                      </a>
                    </div>
                    <div className="pick_today">
                      <div className="row">
                        {Products.map((pick) => (
                          <div className="col-6 col-md-3 mb-3">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                              <div className="list-card-image">
                                <a
                                  href="product_details.html"
                                  className="text-dark"
                                >
                                  <div className="member-plan position-absolute">
                                    <span className="badge m-3 badge-danger">
                                      {/* {pick.discount} */}10%
                                    </span>
                                  </div>
                                  <div className="p-3">
                                    <img
                                      src={pick.ico}
                                      className="img-fluid item-img w-100 mb-3"
                                    />
                                    <h6>{pick.name}</h6>
                                    <div className="d-flex align-items-center">
                                      <h6 className="price m-0 text-success">
                                        ${pick.price}/{pick.weight}{pick.unit}
                                      </h6>
                                      <a
                                        data-toggle="collapse"
                                        href="#collapseExample1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample1"
                                        className="btn btn-success btn-sm ml-auto"
                                      >
                                        +
                                      </a>
                                      <div
                                        className="collapse qty_show"
                                        id="collapseExample1"
                                      >
                                        <div>
                                          <span className="ml-auto" href="#">
                                            <form
                                              id="myform"
                                              className="cart-items-number d-flex"
                                              method="POST"
                                              action="#"
                                            >
                                              <input
                                                type="button"
                                                value="-"
                                                className="qtyminus btn btn-success btn-sm"
                                                field="quantity"
                                              />
                                              <input
                                                type="text"
                                                name="quantity"
                                                value="1"
                                                className="qty form-control"
                                              />
                                              <input
                                                type="button"
                                                value="+"
                                                className="qtyplus btn btn-success btn-sm"
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
                        <div className="osahan-recommend">
                          <div className="row">
                              {recommended.map((recommend)=>(
                            <div className="col-12 col-md-4 mb-3">
                              <a
                                href={recommend.link}
                                className="text-dark text-decoration-none"
                              >
                                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                  <div className="recommend-slider2 rounded mb-0">
                                    <div className="osahan-slider-item m-2 rounded">
                                      <img
                                        src={recommend.images[0]}
                                        className="img-fluid mx-auto rounded shadow-sm"
                                        alt="Responsive image"
                                      />
                                    </div>
                                    <div className="osahan-slider-item m-2 rounded">
                                      <img
                                        src={recommend.images[1]}
                                        className="img-fluid mx-auto rounded shadow-sm"
                                        alt="Responsive image"
                                      />
                                    </div>
                                    <div className="osahan-slider-item m-2 rounded">
                                      <img
                                        src={recommend.images[2]}
                                        className="img-fluid mx-auto rounded shadow-sm"
                                        alt="Responsive image"
                                      />
                                    </div>
                                  </div>
                                  <div className="p-3 position-relative">
                                    <h6 className="mb-1 font-weight-bold text-success">
                                      {recommend.title}
                                    </h6>
                                    <p className="text-muted">
                                      {recommend.desc}
                                    </p>
                                    <div className="d-flex align-items-center">
                                      <h6 className="m-0">$8.8/kg</h6>
                                      <a className="ml-auto" href="#">
                                        <form
                                          id="myform"
                                          className="cart-items-number d-flex"
                                          method="POST"
                                          action="#"
                                        >
                                          <input
                                            type="button"
                                            value="-"
                                            className="qtyminus btn btn-success btn-sm"
                                            field="quantity"
                                          />
                                          <input
                                            type="text"
                                            name="quantity"
                                            value="1"
                                            className="qty form-control"
                                          />
                                          <input
                                            type="button"
                                            value="+"
                                            className="qtyplus btn btn-success btn-sm"
                                            field="quantity"
                                          />
                                        </form>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
