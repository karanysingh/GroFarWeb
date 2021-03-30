import React from "react";

export default function Recommended() {
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
    },
    {
      title: "Fresh Apple",
      desc: "Fresh Apple Premium item from Thailand",
      price: "12.8/Kg",
      images: [
        "img/recommend/r7.jpg",
        "img/recommend/r8.jpg",
        "img/recommend/r9.jpg",
      ],
    },
    {
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
              Recommended
            </li>
          </ol>
        </div>
      </nav>
      <br></br>
      <div className="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="osahan-home-page">
              <div class="osahan-body">
                <div class="osahan-recommend">
                  <div class="d-flex align-items-center mb-3">
                    <h4>Recommended</h4>
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
                  <div class="row">
                    {recommended.map((recommend) => (
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
                              <p class="text-muted">{recommend.desc}</p>
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
