import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <div className="head-container">
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            <h1>Dynamic Responsive Website</h1>
        </div>
        // <nav className='header'>
        //     <img src={logo} alt="" />
        //     <div>
        //         <a href="/shop">Shop</a>
        //         <a href="/orders">Orders</a>
        //         <a href="/inventory">Inventory</a>
        //         <a href="/about">About</a>
        //     </div>
        // </nav>
    );
};

export default Header;

