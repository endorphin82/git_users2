import axios from "axios";
import {
  BASEUSERSAPI,
  FETCH_USERS, START, SUCCESS, FAILURE,
  LOAD_INFO_USER_BY_LOGIN, RESET_USERS
} from "./actions-types";
import api from "../api";

export const getUsers = (location = "Kharkov") => dispatch => {
  dispatch({
    type: FETCH_USERS + START
  });
  return api.getPopularUsersByLocation(location)
    .then(response => response.data)
    .then(users => dispatch({
      type: FETCH_USERS + SUCCESS,
      payload: { users }
    }))
    .catch(errors => dispatch({
      type: FETCH_USERS + FAILURE,
      payload: { errors }
    }));
};

export const loadInfoUserByLogin = (login) => dispatch => {
  dispatch({
    type: LOAD_INFO_USER_BY_LOGIN + START
  });
  return axios.get(`${BASEUSERSAPI}${login}`)
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

export const resetUsers = ({
  type: RESET_USERS
});
