import React from "react";
import UserList from "./components/user-list";
import InputLocation from "./components/input-location";
import styled from "styled-components";

const AppFont = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

function App() {
  return (
    <AppFont className="App">
      <InputLocation/>
      <UserList/>
    </AppFont>
  );
}

export default App;
