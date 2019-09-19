import React, { useEffect } from "react";
import styled from "styled-components";

import UserCard from "../user-card";
import { connect } from "react-redux";
import { expandUsersGetter, usersGetter } from "../../selectors";
import { StyledContainer } from "../../theme/globalStyle";
import { loadInfoUserByLogin } from "../../actions";

const FlexColumn = styled.div`
  flex-direction: column;
`;

function UserList(props) {
  const { users } = props;

  return (
    <FlexColumn>
      {
        (users.length)
          ?
          users.map((user, idx) => <UserCard
            key={idx}
            idx={idx}
          />)
          : <h1>Loading...</h1>
      }
    </FlexColumn>
  );
}

const mapStateToProps = state => ({
  users: expandUsersGetter(state)
});
const mapDispatchToProps = dispatch => ({
  onLoadInfoUserByLogin: (login, idx) => dispatch(loadInfoUserByLogin(login, idx))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);