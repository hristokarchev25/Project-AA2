import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import white from "../../images/white.png";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavImg,
  NavLinksRouter,
} from "./NavbarElements";

const SearchWorkoutNav = ({ toggle, isAuth, email }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavImg src={white} />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinksRouter
                  to="/"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinksRouter>
              </NavItem>
              <NavItem>
                <NavLinksRouter
                  to="/shop"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Shop
                </NavLinksRouter>
              </NavItem>

              {!isAuth ? (
                <NavItem>
                  <NavLinks></NavLinks>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLinks>Welcome, {email}</NavLinks>
                </NavItem>
              )}
            </NavMenu>
            {isAuth ? (
              <NavBtn>
                <NavBtnLink to="/logout">Log out</NavBtnLink>
              </NavBtn>
            ) : (
              <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
              </NavBtn>
            )}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default SearchWorkoutNav;
