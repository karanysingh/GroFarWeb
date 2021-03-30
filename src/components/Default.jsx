import React from "react";

export default function Default() {
    let  categories = [
        { listing: "/listing.html", image: "img/categorie/1.svg", title: "Frozen" },
        { listing: "/listing.html", image: "img/categorie/2.svg", title: "Frozen" },
        { listing: "/listing.html", image: "img/categorie/3.svg", title: "Frozen" },
        { listing: "/listing.html", image: "img/categorie/4.svg", title: "Frozen" },
        { listing: "/listing.html", image: "img/categorie/5.svg", title: "Frozen" },
        { listing: "/listing.html", image: "img/categorie/6.svg", title: "Frozen" },
        { listing: "/listing.html", image: "img/categorie/7.svg", title: "Frozen" },
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
