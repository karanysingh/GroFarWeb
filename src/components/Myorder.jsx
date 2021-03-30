import React from "react";

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
          <div class="tab-content col-md-9" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="completed"
              role="tabpanel"
              aria-labelledby="completed-tab"
            >
              <div class="order-body">
                {orders.map((order) => (
                  <div class="pb-3">
                    <a
                      href="status_complete.html"
                      class="text-decoration-none text-dark"
                    >
                      <div class="p-3 rounded shadow-sm bg-white">
                        <div class="d-flex align-items-center mb-3">
                          {order.status === "delivered" && (
                            <p class="bg-success text-white py-1 px-2 mb-0 rounded small">
                              Delivered
                            </p>
                          )}
                          {order.status === "cancelled" && (
                            <p class="bg-danger text-white py-1 px-2 rounded small m-0">
                              Cancelled
                            </p>
                          )}
                          {order.status === "inprocess" && (
                            <p class="bg-warning text-white py-1 px-2 rounded small m-0">
                              InProcess
                            </p>
                          )}
                          <p class="text-muted ml-auto small mb-0">
                            <i class="icofont-clock-time"></i>
                            {order.date}
                          </p>
                        </div>
                        <div class="d-flex">
                          <p class="text-muted m-0">
                            Transaction. ID
                            <br />
                            <span class="text-dark font-weight-bold">
                              {order.id}
                            </span>
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Delivered to
                            <br />
                            <span class="text-dark font-weight-bold">
                              {order.deliveredTo}
                            </span>
                          </p>
                          <p class="text-muted m-0 ml-auto">
                            Total Payment
                            <br />
                            <span class="text-dark font-weight-bold">
                              ${order.totalPayment}
                            </span>
                          </p>
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
    </section>
  );
}
