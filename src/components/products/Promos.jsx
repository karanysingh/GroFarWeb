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
    return(
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
        </div>
        );
}