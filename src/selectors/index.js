import { createSelector } from "reselect";

export const usersGetter = state => state.users.users;
const idxGetter = (state, ownProps) => ownProps.idx;

export const userByIndFactory = () => createSelector(usersGetter, idxGetter, (users, idx) => {
  return users[idx];
});
export const isUsers = createSelector(usersGetter, (users) => {
  return !!users.users;
});
