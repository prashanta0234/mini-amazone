import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
       
           <div className="logo">
           <img src={logo} alt="" /> 
           </div>
           <nav>
               <a href="/shop">Shop</a>
               <a href="/order-review">Order review</a>
               <a href="Manage-inventory-here">Manage inventory here</a>
            </nav>
           
        </div>
    );
};

export default Header;