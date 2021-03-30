import React from 'react';
import Navbar from './Navbar';
import Default from './Default';
import Footer from './Footer';
import Myorder from './Myorder';
import {Route, BrowserRouter, Switch} from 'react-router-dom';


export default class Home extends React.Component {
    render(){
    return(
        <div>
            <Navbar></Navbar>
            <BrowserRouter>
                <Switch>
                    <Route path="/myorder" exact component={Myorder}></Route>
                    <Route path="/home" exact component={Default}></Route>
                    <Route path="/" exact component={Default}></Route>
                </Switch>
            </BrowserRouter>
            <Footer></Footer>
         </div>
)
    }
}