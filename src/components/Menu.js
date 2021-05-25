import React from 'react'
import Header from './Header'
import CardList from './CardList'
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Menu() {
    return (
        <>
            <Router>
                <Header></Header>
                <CardList></CardList>
           {/*     <Link to="/login">Login  </Link>
                <Link to="/products">Products   </Link>
            */} 
            </Router>
        </>
    )
}

export default Menu

