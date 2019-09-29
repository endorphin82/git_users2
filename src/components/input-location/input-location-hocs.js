import { isUsers, usersGetter } from "../../selectors";
import { getUsers, loadInfoUserByLogin, resetUsers } from "../../actions";
import { compose } from "recompose";
import { connect } from "react-redux";

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
);