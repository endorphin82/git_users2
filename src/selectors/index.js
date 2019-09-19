import { createSelector } from "reselect";

export const usersGetter = state => state.users.users;
export const expandUsersGetter = state => state.expand_users;
const idxGetter = (state, ownProps) => ownProps.idx;

export const userByIndFactory = () => createSelector(usersGetter, idxGetter, (users, idx) => {
  return users[idx];
});

export const expandUserByIndFactory = () => createSelector(expandUsersGetter, idxGetter, (expand_users, idx) => {
  return expand_users[idx];
});

export const isUsers = createSelector(usersGetter, (users) => {
  return (users.length !== undefined);
});
