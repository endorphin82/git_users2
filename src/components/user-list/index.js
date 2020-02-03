import React from "react";
import styled from "styled-components";
import withHocs from "./user-list-hocs.js";
import UserCard from "../user-card";
import Loading from "../loading";

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
          : <Loading/>
      }
    </FlexColumn>
  );
}

export default withHocs(UserList);