import React from 'react';
import CardList from './CardList';
import Menu from './Menu';
import Login from './Login';
import Delivery from './Delivery';
import Header from './Header';

import {Route, BrowserRouter as Router} from "react-router-dom";

function Approute() {
    return (
        <>
            <Router>

                <Route path="/" exact component={Menu}   />
                <Route path="/products" component={CardList}    />
                <Route path="/login" component={Login}    />
                {/* <Route path="/delivery" component={Delivery} /> */}
                
            
            </Router>
            
        </>
    )
}

export default Approute
