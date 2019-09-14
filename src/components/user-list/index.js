import React, { useState, useEffect } from "react";
import styled from "styled-components";

import UserCard from "../user-card";
import { connect } from "react-redux";
import { usersGetter } from "../../selectors";

const FlexColumn = styled.div`
  display: flex;
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