import React, { Fragment } from "react";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from "./SidebarElements";
const Sidebar = () => {
  return (
    <Fragment>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about">About</SidebarLink>
            <SidebarLink to="discover">Discover</SidebarLink>
            <SidebarLink to="services">Services</SidebarLink>
            <SidebarLink to="signup">Sign Up</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </Fragment>
  );
};

export default Sidebar;
