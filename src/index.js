import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloProvider } from 'react-apollo';

import App from "./App";
import store from "./store";
import { client } from "./store/apollo-client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App/>
    </Provider>
  </ApolloProvider>
  , document.getElementById("root"));
