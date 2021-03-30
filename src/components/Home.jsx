import React from 'react';
import Navbar from './Navbar';
import Default from './Default';
import Footer from './Footer';

export default class Home extends React.Component {
    render(){
    return(
        <div>
            <Navbar></Navbar>
            <Default></Default>
            <Footer></Footer>
         </div>
)
    }
}