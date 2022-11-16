import React from "react";
import { Loader } from "semantic-ui-react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 15%;
`;

const LoadingModal = () => (
  <StyledDiv>
    <Loader active inline="centered" />
  </StyledDiv>
);

export default LoadingModal;
