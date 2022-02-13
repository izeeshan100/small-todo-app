import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "assets/icons/home.png";
import  {Wrapper, ContentWrapper, StyledIcon}  from "./Styles/styled";
function Header() {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg navbar-light">
        <ContentWrapper>
          <Link to={'/'}>
          <StyledIcon
            src={HomeIcon}
          />
          </Link>
        </ContentWrapper>
      </nav>
    </Wrapper>
  );
}

export default Header;
