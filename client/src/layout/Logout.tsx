import React from "react";
import { Link } from "react-router-dom";
import { StyledDivForLogout, StyledNav } from "./Layout.Styles";

const Logout = () => {
  const clickHandler = () => {
    window.localStorage.removeItem("jwtToken");
  };

  return (
    <StyledNav>
      <StyledDivForLogout>
        <Link to="/login" onClick={clickHandler}>
          Logout
        </Link>
      </StyledDivForLogout>
    </StyledNav>
  );
};

export default Logout;
