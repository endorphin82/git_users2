import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getUsers, resetUsers } from "../../actions";
import { connect } from "react-redux";
import { isUsers } from "../../selectors";
import Field from "./Field";
import { StyledContainer } from "../../theme/globalStyle";

const InputLocation = (props) => {
  const [input, setInput] = useState("Kiev");
  useEffect(() => {
    console.log("useEffect", props);
    if (!props.isUsers) props.onGetUsers(input);
  });

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

  const Styledlabel = styled.label`
    font-size: 14px;
    color: #7ea897;
      margin: auto 0;
  `;
  const StyledLIDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
  `;
  const StyledContainerCnter = styled(StyledContainer)`
    align-items: center;
`;
  const LabelLeftContainer = styled(Styledlabel)`
  width: 33.333%;
  text-align: left;
`;
    const Center = styled.div`
    width: 33.333%;
    text-align: center;
  `;
  return (
    <>

      <StyledContainerCnter>
        <LabelLeftContainer htmlFor="location">Top ten most popular developers from location: </LabelLeftContainer>
        <Center>
          <form onSubmit={handleSubmit}>
            <Field
              placeholder="Location"
              type="text"
              value={input}
              onChange={inputHandler}
              name="location"
              required
            />
          </form>
        </Center>
      </StyledContainerCnter>
    </>
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