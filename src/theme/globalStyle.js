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
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const StyledContainer = styled.div`
    //max-width: 1010px;
    padding: 26px calc(50% - 500px) 0;
    //padding-right: 20px;
    //padding-left: 20px;
    //padding-bottom: 26px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    @media (max-width: 1030px) {
      padding: 20px calc(50% - 450px);
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
    @media (max-width: 920px) {
      padding: 20px calc(50% - 400px);
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
    @media (max-width: 820px) {
      padding: 20px calc(50% - 350px);
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
      @media (max-width: 720px) {
      padding: 20px calc(50% - 300px);
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
      @media (max-width: 620px) {
      padding: 20px calc(50% - 250px);
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
        @media (max-width: 520px) {
      padding: 20px calc(50% - 200px);
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
    @media (max-width: 420px) {
      padding: 20px calc(50% - 150px);
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
  `;