import React, { useState, useEffect } from "react";
import styled from "styled-components";
import withHocs from "./input-location-hocs";
import { StyledContainer, Wrapper } from "../../theme/globalStyle";
import { toParams } from "../../utils";

const InputLocation = (props) => {
  const [input, setInput] = useState("Kharkov");
  useEffect(() => {
    !props.isUsers && props.onGetUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // useEffect(() => {
  //   if (props.users.length !== undefined) props.users.map((user, idx) => props.onLoadInfoUserByLogin(user.login, idx));
  // }, [props]);

  const inputHandler = event => {
    setInput(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.resetUsers();
    props.onGetUsers(input);
  };

  const handlerFocus = event => {
    event.target.placeholder = "";
    event.target.value = "";
  };

  //TODO:
  if (window.location.search.includes("code=")) {
    console.log("window", window);
    const values = toParams(window.location.search)
    console.log("2win", values["code"] );
    window.history.replaceState({}, document.title, "/" + "");
  }

  return (
    <>
      <Wrapper>
        <StyledContainerCenter>
          <LabelLeftContainer htmlFor="location">Top ten most popular developers from location: </LabelLeftContainer>
          <Center>
            <Form onSubmit={handleSubmit}>
              <Input
                onFocus={handlerFocus}
                placeholder="Location"
                type="text"
                value={input}
                onChange={inputHandler}
                name="location"
                required
              />
              <InputButton type="submit">
                Go
              </InputButton>
            </Form>
          </Center>
          <Right>
            <LoginButton>
              Login with GitHub

              //TODO:
              <a href="https://github.com/login/oauth/authorize?client_id=1b32686a4eb129ceb803">3asd!!asd</a>
            </LoginButton>
          </Right>
        </StyledContainerCenter>
      </Wrapper>
    </>
  );
};

const Form = styled.form`
  display: flex;
`;

const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: #333333;
`;

const LoginButton = styled(Button)`
  color: #eeeeee;
  background-color: #7ea897;
  border-color: #7ea897;
  &:hover,&:active,&:focus {
    color: #ffffff;
    background-color: #66a87a;
    border-color: #66A87A
  }
  :focus {
    border-color: #66A87A;
  }
`;

const InputButton = styled(LoginButton)`
  height: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: solid 1px #dbdbdb;
  border-left: none;

`;

const Input = styled.input`
  border: solid 1px #dbdbdb;
  border-radius: 3px 0 0 3px;
  border-right: none;
  outline: 0;
  padding: 7px 33px;
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
  @media (max-width: 820px) {
    justify-content: space-around;
  }
`;

const StyledLabel = styled.label`
  font-size: 14px;
  color: #7ea897;
  margin: auto 0;
  @media (max-width: 820px) {
    display: none;
  }
`;

const LabelLeftContainer = styled(StyledLabel)`
  min-width: 260px;
  width: 33.333%; 
  text-align: left;
`;

const Center = styled.div`
  min-width: 260px;
  width: 33.333%;
  text-align: center;
`;

// TODO: auth
const Right = styled.div`
  min-width: 140px;
  width: 33.333%;
  text-align: center;
`;

export default withHocs(InputLocation);