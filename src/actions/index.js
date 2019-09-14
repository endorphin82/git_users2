import axios from "axios";
import {
  BASEUSERSAPI,
  FETCH_USERS, START, SUCCESS, FAILURE,
  LOAD_INFO_USER_BY_LOGIN, CIIY, RESET_USERS
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

export const loadInfoUserByLogin = (login, idx) => dispatch => {
  dispatch({
    idx,
    type: LOAD_INFO_USER_BY_LOGIN,
    payload: login,
    callAPI: `${BASEUSERSAPI}${login}`
  });
};

export const resetUsers = ({
  type: RESET_USERS
});
