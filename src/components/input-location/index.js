import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getUsers, resetUsers } from "../../actions";
import { connect } from "react-redux";
import { isUsers } from "../../selectors";

const InputLocation = (props) => {
  const [input, setInput] = useState("Kharkov");
  useEffect(() => {
    console.log("useEffect", props);
    if (!props.isUsers) props.onGetUsers();
  });

  const inputHandler = event => {
    console.log("input", input);
    setInput(event.target.value);
    if (event.keyCode === 13) {
      event.preventDefault();
      props.resetUsers();
      props.onGetUsers(input);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
  };
  const StyledButton = styled.button`
  height: 110%;
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  // margin: 0 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

  const StyledContainer = styled.div`
    display: flex;
        justify-content: flex-start;

    width: 400px;
    border: 1px solid green;
    background-color: #e7e7e7;
    margin: 1% auto;
    border-radius: 2px;
    height: 30px;
  `;

  const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;
  const StyledInput = styled.input`
  height: 100%;
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  background: #fafafa;
    text-align: left;
  &:active,
  &:focus {
    background: #fafafa;
  }
`;
  const Styledlabel = styled.label`
  height: 110%;
    font-size: 14px;
    color: #7ea897;
      border: solid 1px gold;
      margin: auto 0;
  `;
  const StyledLIDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
  `;

  return (
    <form onSubmit={handleSubmit} >

      <StyledContainer>
        <StyledInputContainer>
          <StyledLIDiv>
            <Styledlabel htmlFor="location">Location:{input}</Styledlabel>
            <StyledInput
              type="text"
              value={input}
              onChange={inputHandler}
              name="location"
            />
            <StyledButton type="submit">Search</StyledButton>
          </StyledLIDiv>
        </StyledInputContainer>
      </StyledContainer>
    </form>
  );
};

const mapStateToProps = state => ({
  isUsers: isUsers(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetUsers,
  onGetUsers: (ownProps) => dispatch(getUsers(ownProps))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputLocation);