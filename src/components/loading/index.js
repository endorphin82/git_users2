import React from "react";
import loading from "./loading.svg";
import styled from "styled-components";

const Spinner = styled.div`
  display: flex;
  justify-content: center;
`;

const Loading = () => (
  <Spinner>
    <img src={loading} alt="Loading"/>
  </Spinner>
);

export default Loading;
