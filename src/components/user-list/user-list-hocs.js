import { compose } from "recompose";
import { usersGetter } from "../../selectors";
import { loadInfoUserByLogin } from "../../actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  users: usersGetter(state)
});
const mapDispatchToProps = dispatch => ({
  onLoadInfoUserByLogin: (login, idx) => dispatch(loadInfoUserByLogin(login, idx))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
);