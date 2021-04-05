import React from "react";
import { Route, Switch  } from "react-router-dom";
import DefaultMyOrder from './myorder/DefaultMyOrder';
import OrderStatus from './myorder/OrderStatus';

export default function Myorder() {
  let orders = [
    {
      id: "#321DERS",
      deliveredTo: "Home",
      totalPayment: "12.74",
      date: "06/04/2020",
      status: "delivered",
    },
    {
      id: "#321DERS",
      deliveredTo: "Home",
      totalPayment: "105.74",
      date: "06/04/2020",
      status: "delivered",
    },
    {
      id: "#321DERS",
      deliveredTo: "Home",
      totalPayment: "40.74",
      date: "06/04/2020",
      status: "delivered",
    },
    {
      id: "#321DERS",
      deliveredTo: "Home",
      totalPayment: "12.54",
      date: "06/04/2020",
      status: "inprocess",
    },
    {
      id: "#321DERS",
      deliveredTo: "Home",
      totalPayment: "12.74",
      date: "06/04/2020",
      status: "cancelled",
    },
  ];
  return (
    <section class="py-4 osahan-main-body">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <ul
              class="nav nav-tabs custom-tabs border-0 flex-column bg-white rounded overflow-hidden shadow-sm p-2 c-t-order"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link border-0 text-dark py-3 active"
                  id="completed-tab"
                  data-toggle="tab"
                  href="#completed"
                  role="tab"
                  aria-controls="completed"
                  aria-selected="true"
                >
                  <i class="icofont-check-alt mr-2 text-success mb-0"></i>
                  Completed
                </a>
              </li>
              <li class="nav-item border-top" role="presentation">
                <a
                  class="nav-link border-0 text-dark py-3"
                  id="progress-tab"
                  data-toggle="tab"
                  href="#progress"
                  role="tab"
                  aria-controls="progress"
                  aria-selected="false"
                >
                  <i class="icofont-wall-clock mr-2 text-warning mb-0"></i> On
                  Progress
                </a>
              </li>
              <li class="nav-item border-top" role="presentation">
                <a
                  class="nav-link border-0 text-dark py-3"
                  id="canceled-tab"
                  data-toggle="tab"
                  href="#canceled"
                  role="tab"
                  aria-controls="canceled"
                  aria-selected="false"
                >
                  <i class="icofont-close-line mr-2 text-danger mb-0"></i>
                  Canceled
                </a>
              </li>
            </ul>
          </div>
          <Switch>
              <Route exact path="/myorder" component={()=><DefaultMyOrder orders={orders}></DefaultMyOrder>}></Route>
              <Route exact path="/myorder/status" component={()=><OrderStatus orders={orders}></OrderStatus>}></Route>
         </Switch>
        </div>
      </div>
    </section>
  );
}
