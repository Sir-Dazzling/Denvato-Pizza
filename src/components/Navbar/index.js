import React from 'react';
import {Nav, NavIcon, NavLink, Bars} from './NavbarElements';

const Navbar = () => {
    return (
         <Nav>
            <NavLink to="/">Denvato Pizza</NavLink>
            <NavIcon>
                <p>Menu</p>
                <Bars />
            </NavIcon>
         </Nav>   
    )
}

export default Navbar;
