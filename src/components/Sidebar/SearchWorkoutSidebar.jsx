import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
  SidebarLinkRouter,
} from "./SidebarElements";

function SearchWorkoutSidebar({ isOpen, toggle, isAuth }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkRouter to="/" onClick={toggle}>
            Home
          </SidebarLinkRouter>
          <SidebarLinkRouter to="/shop" onClick={toggle}>
            Shop
          </SidebarLinkRouter>
        </SidebarMenu>
        {isAuth ? (
          <SideBtnWrap>
            <SidebarRoute to="/logout">Log out</SidebarRoute>
          </SideBtnWrap>
        ) : (
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default SearchWorkoutSidebar;
