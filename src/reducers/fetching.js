import {
  FETCH_USERS, START, SUCCESS, FAILURE, RESET_USERS
} from "../actions/actions-types";

const initialState = {
  users: {},
  errors: {},
  loading: false
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS + START:
      return {
        ...state,
        loading: false,
        errors: false
      };
    case FETCH_USERS + SUCCESS:
      return {
        ...state,
        users: action.payload.users.edges.slice(0, 10),
        errors: {},
        loading: true
      };
    case FETCH_USERS + FAILURE:
      return {
        ...state,
        errors: action.payload.errors
      };
    case RESET_USERS:
      return initialState;
    default:
      return state;
  }
}


