import { createSelector } from "reselect";

export const usersGetter = state => state.users.users;
export const expandUsersGetter = state => state.expand_users;
const idxGetter = (state, ownProps) => ownProps.idx;

export const userByIndFactory = () => createSelector(usersGetter, idxGetter, (users, idx) => {
  return users[idx].node;
});

export const userByIndFactoryStar = () => createSelector(usersGetter, idxGetter, (users, idx) => {
  console.log(users[idx].node);
  return users[idx].node.repositories.edges.reduce((acc, r) => acc + r.node.stargazers.totalCount, 0)
});
//  const star = repositories.edges.reduce((acc, r) => acc + r.node.stargazers.totalCount, 0);
export const expandUserByIndFactory = () => createSelector(expandUsersGetter, idxGetter, (expand_users, idx) => {
  return expand_users[idx].node;
});

export const isUsers = createSelector(usersGetter, (users) => {
  return (users.length !== undefined);
});
