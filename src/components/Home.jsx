import React from 'react';
import Navbar from './Navbar';
import Default from './Default';
import Footer from './Footer';
import Myorder from './Myorder';
import {Route, BrowserRouter} from 'react-router-dom';
import Recommended from './products/Recommended';
import Popular from './products/Popular';
import Myaccount from './myaccount/Myaccount';
import AdminPanel from './myaccount/AdminPanel';
import AdminNew from './myaccount/Admin';
import AdminFinal from './myaccount/AdminFinal';


export default class Home extends React.Component {

      
    render(){
    return(
        <div>
        <BrowserRouter>
            <Navbar></Navbar>
                {/* <Switch> */}
                    <Route exact path="/myorder" component={Myorder}></Route>
                    <Route exact path="/admin1" component={AdminPanel}></Route>
                    <Route exact path="/admin2" component={AdminNew}></Route>
                    <Route exact path="/admin3" component={AdminFinal}></Route>
                    <Route exact path="/myorder/:type" component={Myorder}></Route>
                    <Route exact path="/myaccount" component={Myaccount}></Route>
                    <Route exact path="/myaccount/:type" component={Myaccount}></Route>
                    <Route exact path="/recommended" component={Recommended}></Route>
                    <Route exact path="/popular" component={Popular}></Route>
                    <Route exact path="/home" component={Default}></Route>
                    <Route exact path="/" component={Default}></Route>         
                {/* </Switch> */}
            <Footer></Footer>
            </BrowserRouter>
         </div>
)
    }
}