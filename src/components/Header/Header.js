import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../imgs/logo.png';
import "./Header.scss";

function Header() {
    return (
        <div className="logoLayout">
            <NavLink to="/" style={{width: '400px'}}>
                <img className="logo" src={logo}/>
            </NavLink>
        </div>
    )
}

export default Header;
