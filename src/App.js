import React from "react";
import UserList from "./components/user-list";
import InputLocation from "./components/input-location";
import {GlobalStyle} from "./theme/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <InputLocation/>
      <UserList/>
    </>
  );
}

export default App;
