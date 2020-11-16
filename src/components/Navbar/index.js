import React, { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavItem,
  NavLinks,
  NavMenu,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = () => {
  return (
    <Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">SMOOTH</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
