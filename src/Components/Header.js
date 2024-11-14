import React from 'react';
import Navbar from "../Router/Navbar";
import { Link } from 'react-router-dom';
import '../Styles/Header.css'
const Header = ()=>{
     return(
        <>
        <div className="navbar">
           <h1>Nav</h1>
           <div className='logo'><Link to="/">Tech-Shop</Link></div>
           <Navbar/>           
        </div>      
        </>
    )
}

export default Header;