import React from "react";
import Login from "./Login";
import Register from "./Register";

import styled from "styled-components";
import Home from "../pages/Home";

const StyledDiv = styled.div`
  width: 60%;
  margin: 10% 0 0 20%;
`;

interface LandingProps {
  isUserLoggedIn: boolean;
}

const Landing = ({ isUserLoggedIn }: LandingProps) => {
  return isUserLoggedIn ? (
    <Home />
  ) : (
    <StyledDiv>
      <Login headerText="Already have an account?" />
      <Register headerText="New User?" />
    </StyledDiv>
  );
};

export default Landing;
