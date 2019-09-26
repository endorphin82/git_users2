import { combineReducers } from "redux";
import users from "./fetching";
import expand_users from "./expand_users";
import { apolloReducer } from 'apollo-cache-redux';

const reducer = combineReducers({
  users,
  expand_users,
  apollo: apolloReducer
});

export default reducer;