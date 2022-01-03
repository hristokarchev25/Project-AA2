import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

function ShopSidebar({ isOpen, toggle, isAuth }) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="protein" onClick={toggle}>Protein Powder</SidebarLink>
                    <SidebarLink to="mats" onClick={toggle}>Yoga Mats</SidebarLink>
                    <SidebarLink to="gym" onClick={toggle}>Gym Equipment</SidebarLink>
                </SidebarMenu>
                {isAuth
                    ? (
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
};

export default ShopSidebar;