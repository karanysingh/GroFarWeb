import React from "react";

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
  return (
    <section class="py-4 osahan-main-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="osahan-home-page">
              <div class="osahan-body">
                <div class="pt-3 pb-2 osahan-categories">
                  <div class="d-flex align-items-center mb-2">
                    <h5 class="m-0">What do you looking for?</h5>
                    <a
                      href="listing.html"
                      class="ml-auto btn btn-outline-success btn-sm"
                    >
                      See more
                    </a>
                  </div>
                  <div class="categories-slider">
                    {categories.map((product) => {
                      return (
                        <div class="col-c">
                          <div class="bg-white shadow-sm rounded text-center my-2 px-2 py-3 c-it">
                            <a href={product.link}>
                              <img
                                src={product.image}
                                class="img-fluid px-2 mx-auto"
                              ></img>
                              <p class="m-0 pt-2 text-muted text-center">
                                {product.title}
                              </p>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div class="py-3 osahan-promos">
                    <div class="d-flex align-items-center mb-3">
                      <h5 class="m-0">Promos for you</h5>
                      <a
                        href="promos.html"
                        class="ml-auto btn btn-outline-success btn-sm"
                      >
                        See more
                      </a>
                    </div>
                    <div class="promo-slider pb-0 mb-0">
                      {promos.map((promo) => {
                        return (
                          <div class="osahan-slider-item mx-2">
                            <a href={promo.link}>
                              <img
                                src={promo.image}
                                class="img-fluid mx-auto rounded"
                                alt="Responsive image"
                              />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                    <div class="title d-flex align-items-center py-3">
                      <h5 class="m-0">Pick's Today</h5>
                      <a
                        class="ml-auto btn btn-outline-success btn-sm"
                        href="picks_today.html"
                      >
                        See more
                      </a>
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
                        <div class="osahan-recommend">
                          <div class="row">
                              {recommended.map((recommend)=>(
                            <div class="col-12 col-md-4 mb-3">
                              <a
                                href={recommend.link}
                                class="text-dark text-decoration-none"
                              >
                                <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                  <div class="recommend-slider2 rounded mb-0">
                                    <div class="osahan-slider-item m-2 rounded">
                                      <img
                                        src={recommend.images[0]}
                                        class="img-fluid mx-auto rounded shadow-sm"
                                        alt="Responsive image"
                                      />
                                    </div>
                                    <div class="osahan-slider-item m-2 rounded">
                                      <img
                                        src={recommend.images[1]}
                                        class="img-fluid mx-auto rounded shadow-sm"
                                        alt="Responsive image"
                                      />
                                    </div>
                                    <div class="osahan-slider-item m-2 rounded">
                                      <img
                                        src={recommend.images[2]}
                                        class="img-fluid mx-auto rounded shadow-sm"
                                        alt="Responsive image"
                                      />
                                    </div>
                                  </div>
                                  <div class="p-3 position-relative">
                                    <h6 class="mb-1 font-weight-bold text-success">
                                      {recommend.title}
                                    </h6>
                                    <p class="text-muted">
                                      {recommend.desc}
                                    </p>
                                    <div class="d-flex align-items-center">
                                      <h6 class="m-0">$8.8/kg</h6>
                                      <a class="ml-auto" href="#">
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
