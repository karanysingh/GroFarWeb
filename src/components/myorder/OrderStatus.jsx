import React from 'react';

export default function OrderStatus(){
    return(
<section class="bg-white osahan-main-body rounded shadow-sm overflow-hidden">
<div class="container-0">
<div class="row">
<div class="col-lg-12">
<div class="osahan-status">

<div class="p-3 status-order border-bottom bg-white">
<p class="small m-0"><i class="icofont-ui-calendar"></i> 16 June, 11:30AM</p>
</div>
<div class="p-3 border-bottom">
<h6 class="font-weight-bold">Order Status</h6>
<div class="tracking-wrap">
<div class="my-1 step active">
<span class="icon text-success"><i class="icofont-check-circled"></i></span>
<span class="text small">Preparing order</span>
</div>

<div class="my-1 step active">
<span class="icon text-danger"><i class="icofont-close-circled"></i></span>
<span class="text small">Ready to collect</span>
</div>

<div class="my-1 step">
<span class="icon text-danger"><i class="icofont-close-circled"></i></span>
<span class="text small">On the way </span>
</div>

<div class="my-1 step">
<span class="icon text-danger"><i class="icofont-close-circled"></i></span>
<span class="text small">Delivered Order</span>
</div>

</div>
</div>

<div class="p-3 border-bottom bg-white">
<h6 class="font-weight-bold">Destination</h6>
<p class="m-0 small">554 West 142nd Street, New York, NY 10031</p>
</div>
<div class="p-3 border-bottom">
<p class="font-weight-bold small mb-1">Courier</p>
<img src="img/logo.svg" class="img-fluid sc-osahan-logo mr-2"></img><span class="small text-success font-weight-bold">Grocery Courier
</span>
</div>


<div class="p-3 border-bottom bg-white">
<div class="d-flex align-items-center mb-2">
<h6 class="font-weight-bold mb-1">Total Cost</h6>
<h6 class="font-weight-bold ml-auto mb-1">$8.52</h6>
</div>
<p class="m-0 small text-muted">You can check your order detail here,<br></br>Thank you for order.</p>
</div>
</div>
</div>
</div>
</div>
</section>
    );
}