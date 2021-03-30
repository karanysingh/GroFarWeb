import React from 'react';

export default function Promos(){
    let promos = [
     { image: "img/promo1.jpg", link: "/promo_details.html" },
     { image: "img/promo2.jpg", link: "/promo_details.html" },
     { image: "img/promo3.jpg", link: "/promo_details.html" },
     { image: "img/promo4.jpg", link: "/promo_details.html" },
     { image: "img/promo2.jpg", link: "/promo_details.html" },
     { image: "img/promo3.jpg", link: "/promo_details.html" },
   ];
   let menuoptions = [
       {menuIcon:'',menuTitle:'My Account',link:''},
       {menuIcon:'',menuTitle:'Promos',link:''},
       {menuIcon:'',menuTitle:'My Account',link:''},
       {menuIcon:'',menuTitle:'My Account',link:''},
   ]
    return(
        <div class="col-lg-8 p-4 bg-white rounded shadow-sm">
            <div class="osahan-promos">
              <h4 class="mb-4 profile-title">Avaiable Promos</h4>

              <div class="pb-3">
                <a href="promo_details.html" class="text-decoration-none text-white my-3">
                  </a><div class="rounded bg-success shadow-sm p-3 text-white"><a href="promo_details.html" class="text-decoration-none text-white my-3">
                    </a><div class="row align-items-center"><a href="promo_details.html" class="text-decoration-none text-white my-3">
                      </a><div class="col-9"><a href="promo_details.html" class="text-decoration-none text-white my-3">
                        <div class="d-flex align-items-center">
                          <img class="pp-osahan-logo" src="img/logo.svg"></img>
                          <div class="brand ml-2">
                            <h5 class="m-0">Grocery</h5>
                          </div>
                        </div>
                        <div class="mt-2 mb-3">
                          <p class="text-white m-0">BANANA'S 25% OFF</p>
                        </div>
                        </a><a href="promo_details.html" class="btn btn-outline-light btn-sm"><i class="icofont-sale-discount"></i> CHECK NOW</a>
                      </div>
                      <div class="col-3 text-center">
                        <a href="promo_details.html"><img src="img/promos/p1.png" class="img-fluid"></img></a>
                      </div>
                    </div></div>
              </div>

              <div class="pb-3">
                <a href="promo_details.html" class="text-decoration-none text-white">
                  </a><div class="rounded bg-info shadow-sm p-3 text-white"><a href="promo_details.html" class="text-decoration-none text-white">
                    </a><div class="row align-items-center"><a href="promo_details.html" class="text-decoration-none text-white">
                      </a><div class="col-9"><a href="promo_details.html" class="text-decoration-none text-white">
                        <div class="d-flex align-items-center">
                          <img class="pp-osahan-logo" src="img/logo.svg"></img>
                          <div class="brand ml-2">
                            <h5 class="m-0">Grocery</h5>
                          </div>
                        </div>
                        <div class="mt-2 mb-3">
                          <p class="text-white m-0">
                            FREE LETTUCE ON EVERY PURCHASE
                          </p>
                        </div>
                        </a><a href="promo_details.html" class="btn btn-outline-light btn-sm"><i class="icofont-sale-discount"></i> CHECK NOW</a>
                      </div>
                      <div class="col-3 text-center">
                        <a href="promo_details.html"><img src="img/promos/p2.png" class="img-fluid"></img></a>
                      </div>
                    </div>
                  </div>
                
              </div>

              <div class="pb-3">
                <a href="promo_details.html" class="text-decoration-none text-white">
                  </a><div class="rounded bg-danger shadow-sm p-3 text-white"><a href="promo_details.html" class="text-decoration-none text-white">
                    </a><div class="row align-items-center"><a href="promo_details.html" class="text-decoration-none text-white">
                      </a><div class="col-9"><a href="promo_details.html" class="text-decoration-none text-white">
                        <div class="d-flex align-items-center">
                          <img class="pp-osahan-logo" src="img/logo.svg"></img>
                          <div class="brand ml-2">
                            <h5 class="m-0">Grocery</h5>
                          </div>
                        </div>
                        <div class="mt-2 mb-3">
                          <p class="text-white m-0">
                            FREE DELIVERY ON BUY BREAD
                          </p>
                        </div>
                        </a><a href="promo_details.html" class="btn btn-light btn-sm"><i class="icofont-sale-discount"></i> CHECK NOW</a>
                      </div>
                      <div class="col-3 text-center">
                        <a href="promo_details.html"><img src="img/promos/p3.png" class="img-fluid"></img></a>
                      </div>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
    );

}