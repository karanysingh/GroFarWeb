import React from 'react';

export default function DefaultMyOrder(props){
    return(
        <div class="tab-content col-md-9" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="completed"
              role="tabpanel"
              aria-labelledby="completed-tab"
            >>
              <div class="order-body">
                {props.orders.map((order) => (
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
    );
}