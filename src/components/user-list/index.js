import React, { useState, useEffect } from "react";
import styled from "styled-components";

import UserCard from "../user-card";
import { connect } from "react-redux";
import { usersGetter } from "../../selectors";
import { StyledContainer } from "../../theme/globalStyle";

const FlexColumn = styled(StyledContainer)`
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
  users: usersGetter(state)
});

export default connect(mapStateToProps, null)(UserList);