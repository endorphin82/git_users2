import axios from "axios";
import {
  BASEUSERSAPI,
  FETCH_USERS, START, SUCCESS, FAILURE,
  LOAD_INFO_USER_BY_LOGIN, RESET_USERS,
} from "./actions-types";
import { GET_USERS_OF_LOCATION } from "../components/input-location/queries";
import { client } from "../store/apollo-client";

export const getUsers = (location = "Kharkov") => dispatch => {
  dispatch({
    type: FETCH_USERS + START
  });
  return client.query({
    query: GET_USERS_OF_LOCATION,
    variables: { "query": `location:${location}` }
  })
    .then(response => response.data.search)
    .then(users => dispatch({
        type: FETCH_USERS + SUCCESS,
        payload: { users }
      })
    )
    .catch(errors => dispatch({
      type: FETCH_USERS + FAILURE,
      payload: { errors }
    }));
};

export const loadInfoUserByLogin = (login) => dispatch => {
  dispatch({
    type: LOAD_INFO_USER_BY_LOGIN + START
  });
  return axios.get(`${BASEUSERSAPI}${login}?access_token=${
    process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`)
    .then(response => response.data)
    .then(user => dispatch({
      type: LOAD_INFO_USER_BY_LOGIN + SUCCESS,
      payload: { user }
    }))
    .catch(errors => dispatch({
      type: LOAD_INFO_USER_BY_LOGIN + FAILURE,
      payload: { errors }
    }));
};

export const resetUsers = () => ({
  type: RESET_USERS
});
