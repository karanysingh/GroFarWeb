import React from 'react';
import Navbar from './Navbar';
import Default from './Default';
import Footer from './Footer';
import Myorder from './Myorder';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Recommended from './products/Recommended';
import Popular from './products/Popular';
import Trending from './products/Trending';
import Promos from './myaccount/Promos';
import myaccount from './myaccount/Myaccount';


export default class Home extends React.Component {

      
    render(){
    return(
        <div>
            <Navbar></Navbar>
            <BrowserRouter>
                <Switch>
                    <Route path="/myorder" exact component={Myorder}></Route>
                    <Route path="/myaccount" exact component={myaccount}></Route>
                    <Route path="/recommended" exact component={Recommended}></Route>
                    <Route path="/trending" exact component={Trending}></Route>
                    <Route path="/popular" exact component={Popular}></Route>
                    <Route path="/promos" exact component={Promos}></Route>
                    <Route path="/home" exact component={Default}></Route>
                    <Route path="/" exact component={Default}></Route>
                </Switch>
            </BrowserRouter>
            <Footer></Footer>
         </div>
)
    }
}