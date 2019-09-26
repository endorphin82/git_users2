import { ApolloClient } from 'apollo-client';
import { GITHUB_BASE_URL } from "../actions/actions-types";
import { ReduxCache } from 'apollo-cache-redux';
import { HttpLink } from 'apollo-link-http';

import store from "./index";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});
// const cache = new ReduxCache({ store });
const cache = new InMemoryCache();
export const client = new ApolloClient({
  link: httpLink,
  cache,
});
