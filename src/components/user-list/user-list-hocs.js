import { compose } from "recompose";
import { expandUsersGetter } from "../../selectors";
import { loadInfoUserByLogin } from "../../actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  users: expandUsersGetter(state)
});
const mapDispatchToProps = dispatch => ({
  onLoadInfoUserByLogin: (login, idx) => dispatch(loadInfoUserByLogin(login, idx))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
);