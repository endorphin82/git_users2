import { isUsers, usersGetter } from "../../selectors";
import { getUsers, loadInfoUserByLogin, resetUsers } from "../../actions";
import { compose } from "recompose";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import { GET_USERS_OF_LOCATION } from "./queries";


// const withGraphQL = graphql(GET_USERS_OF_LOCATION, {
//   options: ({   queryString = "location:Kharkov" }) => ({
//     variables: { queryString }
//   })
// });

const mapStateToProps = state => ({
  isUsers: isUsers(state),
  users: usersGetter(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetUsers: () => dispatch(resetUsers()),
  onGetUsers: (ownProps) => dispatch(getUsers(ownProps)),
  onLoadInfoUserByLogin: (login, idx) => dispatch(loadInfoUserByLogin(login, idx))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // withGraphQL
);