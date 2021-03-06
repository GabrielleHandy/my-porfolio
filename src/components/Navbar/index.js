import React from 'react';
import {FaBars} from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';



const Navbar = ({ toggle }) => {
    return (
        <>
         <Nav>
             <NavbarContainer>
                 <NavLogo to='/'>
                     
                     GH
                 </NavLogo>
                 <MobileIcon onClick={toggle}>
                     <FaBars />
                 </MobileIcon>
                 <NavMenu>
                      <NavItem>
                         <NavLinks to="main">Home</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to="about">About</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to="techStack">Tech Stack</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to="projects">Projects</NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to="contact">Contact Me!</NavLinks>
                     </NavItem>
                 </NavMenu>
                 
             </NavbarContainer>
         </Nav>
        </>
    )
}

export default Navbar
