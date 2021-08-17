import React from 'react';
import LOGOHD from '../../Assets/logo-hd.png';
import LOGOSD from '../../Assets/logo.png';
import './Header.css'
import {FiMenu} from 'react-icons/fi';
const Header = () => {
    return ( 
        <div className="container headerContainer">
            <img src={LOGOHD || LOGOSD} alt="LOGO" className="main-logo" />
            <FiMenu className="hamburgerMenuIcon"/>
        </div>
     );
}
 
export default Header;