import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
export  const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
  export const StyledContainer = styled.div`
    //max-width: 1010px;
    padding: 0 calc(50% - 500px);
    padding-top: 26px;
    //padding-right: 20px;
    //padding-left: 20px;
    //padding-bottom: 26px;
    width: 100%;
    display: flex;
    margin: 0 auto;
  `;