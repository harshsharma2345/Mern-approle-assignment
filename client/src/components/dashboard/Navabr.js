import './Dashboard.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Navbar=()=>{
 return(
    <>
     <div class="topnav">
                <Link to="/addorder"><a>Add New Order</a></Link>
                <Link to="/dashboard"><a>All Orders</a></Link>
            </div>
    </>
 )
}
export default Navbar;