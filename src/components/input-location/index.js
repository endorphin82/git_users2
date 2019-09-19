import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getUsers, loadInfoUserByLogin, resetUsers } from "../../actions";
import { connect } from "react-redux";
import { isUsers, usersGetter } from "../../selectors";
import { StyledContainer, Wrapper } from "../../theme/globalStyle";

const InputLocation = (props) => {
  const [input, setInput] = useState("Kharkov");
  useEffect(() => {
   !props.isUsers && props.onGetUsers(input);
  }, []);

  useEffect(() => {
    if (props.users.length !== undefined) props.users.map((user, idx) => props.onLoadInfoUserByLogin(user.login, idx));
  }, [props.users]);

  const inputHandler = event => {
    setInput(event.target.value);
    console.log("event", event.target.name, " ", event.target.value);
  };

  const handleSubmit = event => {
    // props.resetUsers();
    if (event) {
      event.preventDefault();
    }
    console.log("SUBMIT", event.target.value);
    props.onGetUsers(input);
  };

  const handlerFocus = event => {
    event.target.placeholder = "";
    event.target.value = "";
  };
  return (
    <>
      <Wrapper>
        <StyledContainerCenter>
          <LabelLeftContainer htmlFor="location">Top ten most popular developers from location: </LabelLeftContainer>
          <Center>
            <form onSubmit={handleSubmit}>
              <Input
                onFocus={handlerFocus}
                placeholder="Location"
                type="text"
                value={input}
                onChange={inputHandler}
                name="location"
                required
              />
            </form>
          </Center>
          {/*<Right> asda</Right>*/}
        </StyledContainerCenter>
      </Wrapper>
    </>
  );
};

const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  outline: 0;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active, &:focus {
    text-align: left;
  }
`;

const StyledContainerCenter = styled(StyledContainer)`
  justify-content: flex-start;
  padding-bottom: 26px;
`;

const Styledlabel = styled.label`
  font-size: 14px;
  color: #7ea897;
  margin: auto 0;
`;

const LabelLeftContainer = styled(Styledlabel)`
  width: 33.333%; 
  text-align: left;
`;

const Center = styled.div`
  width: 33.333%;
  text-align: center;
`;

// const Right = styled.div`
//   width: 33.333%;
//   text-align: center;
// `;

const mapStateToProps = state => ({
  isUsers: isUsers(state),
  users: usersGetter(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetUsers,
  onGetUsers: (ownProps) => dispatch(getUsers(ownProps)),
  onLoadInfoUserByLogin: (login, idx) => dispatch(loadInfoUserByLogin(login, idx))

});

export default connect(mapStateToProps, mapDispatchToProps)(InputLocation);