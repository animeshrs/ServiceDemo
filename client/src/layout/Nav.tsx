import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { Menu } from "semantic-ui-react";
import { StyledNav } from "./Layout.Styles";


const Nav = () => {
  return (
    <Menu secondary>
      <nav style={{ display: "flex" }}>
        <StyledNav>
          <Link to="/home">Home</Link>
        </StyledNav>
        <StyledNav>
          <Link to="/products">Products</Link>
        </StyledNav>
        <StyledNav>
          <Link to="/about">About</Link>
        </StyledNav>
        <Logout />
      </nav>
    </Menu>
  );
};

export default Nav;
