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
    padding: 0 calc(50% - 500px);
    padding-top: 26px;
    //padding-right: 20px;
    //padding-left: 20px;
    //padding-bottom: 26px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    @media (max-width: 1030px) {
      padding: 0 calc(50% - 450px);
      padding-top: 20px;
      padding-bottom: 20px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
    @media (max-width: 920px) {
      padding: 0 calc(50% - 400px);
      padding-top: 20px;
      padding-bottom: 20px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
    @media (max-width: 820px) {
      padding: 0 calc(50% - 350px);
      padding-top: 20px;
      padding-bottom: 20px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
      @media (max-width: 720px) {
      padding: 0 calc(50% - 300px);
      padding-top: 20px;
      padding-bottom: 20px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
      @media (max-width: 620px) {
      padding: 0 calc(50% - 250px);
      padding-top: 20px;
      padding-bottom: 20px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
        @media (max-width: 520px) {
      padding: 0 calc(50% - 200px);
      padding-top: 20px;
      padding-bottom: 20px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
    @media (max-width: 420px) {
      padding: 0 calc(50% - 150px);
      padding-top: 20px;
      padding-bottom: 20px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
  }
  `;