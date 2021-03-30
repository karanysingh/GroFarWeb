import React from 'react';
import DefaultMyaccount from './DefaultMyaccount';
import Promos from './Promos';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Address from './Address';
import Terms from './Terms';
import Help from './Help';
import Logout from './Logout';

export default function myaccount(){
    return(
        
<section class="py-4 osahan-main-body">
<div class="container">
<div class="row">
<div class="col-lg-4">
<div class="osahan-account bg-white rounded shadow-sm overflow-hidden">
<div class="p-4 profile text-center border-bottom">
<img src="img/user.png" class="img-fluid rounded-pill"></img>
<h6 class="font-weight-bold m-0 mt-2">Askbootstrap</h6>
<p class="small text-muted m-0"><a href="https://askbootstrap.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="365f575b5945575e575876515b575f5a1855595b">[email&#160;protected]</a></p>
</div>
<div class="account-sections">
<ul class="list-group">
<a href="my_account.html" class="text-decoration-none text-dark">
<li class="border-bottom bg-white d-flex align-items-center p-3">
<i class="icofont-user osahan-icofont bg-danger"></i>My Account
<span class="badge badge-success p-1 badge-pill ml-auto"><i class="icofont-simple-right"></i></span>
</li>
</a>
<a href="/myaccount/promos" class="text-decoration-none text-dark">
<li class="border-bottom bg-white d-flex align-items-center p-3">
<i class="icofont-sale-discount osahan-icofont bg-success"></i>Promos
<span class="badge badge-success p-1 badge-pill ml-auto"><i class="icofont-simple-right"></i></span>
</li>
</a>
<a href="/myaddress" class="text-decoration-none text-dark">
<li class="border-bottom bg-white d-flex align-items-center p-3">
<i class="icofont-address-book osahan-icofont bg-dark"></i>My Address
<span class="badge badge-success p-1 badge-pill ml-auto"><i class="icofont-simple-right"></i></span>
</li>
</a>
<a href="/terms" class="text-decoration-none text-dark">
<li class="border-bottom bg-white d-flex align-items-center p-3">
<i class="icofont-info-circle osahan-icofont bg-primary"></i>Terms, Privacy & Policy
<span class="badge badge-success p-1 badge-pill ml-auto"><i class="icofont-simple-right"></i></span>
</li>
</a>
<a href="/help" class="text-decoration-none text-dark">
<li class="border-bottom bg-white d-flex align-items-center p-3">
<i class="icofont-phone osahan-icofont bg-warning"></i>Help & Support
<span class="badge badge-success p-1 badge-pill ml-auto"><i class="icofont-simple-right"></i></span>
</li>
</a>
<a href="/ticket" class="text-decoration-none text-dark">
<li class="border-bottom bg-white d-flex align-items-center p-3">
<i class="icofont-phone osahan-icofont bg-success"></i>Ticket
<span class="badge badge-success p-1 badge-pill ml-auto"><i class="icofont-simple-right"></i></span>
</li>
</a>
<a href="/logout" class="text-decoration-none text-dark">
<li class="border-bottom bg-white d-flex  align-items-center p-3">
<i class="icofont-lock osahan-icofont bg-danger"></i> Logout
</li>
</a>

</ul>
</div>
</div>
</div>
<BrowserRouter>
                <Switch>
                    <Route path="/myaccount" exact component={DefaultMyaccount}></Route>
                    <Route path="/myaccount/promos" exact component={Promos}></Route>
                    <Route path="/myaddress" exact component={Address}></Route>
                    <Route path="/terms" exact component={Terms}></Route>
                    <Route path="/help" exact component={Help}></Route>
                    <Route path="/logout" exact component={Logout}></Route>
                </Switch>
            </BrowserRouter>
</div>
</div>
</section>
    );
}