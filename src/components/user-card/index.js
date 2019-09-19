import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { expandUserByIndFactory, userByIndFactory } from "../../selectors";
import { StyledContainer, Wrapper } from "../../theme/globalStyle";

const UserCard = (props) => {
  console.log('user',props);
  const { login, node_id, avatar_url, bio, email, location, name, stars } = props.user;
  // console.log("props", props);
  return (
    <div key={node_id}>
      <WrapperBorder>
        <StyledContainer>
          <Left>
            <img width='50' height='50' src={avatar_url} alt=""/>
          </Left>
          <Right>
            <Paragraph>
              <StyledGitHubLink nickname={login}>{login}</StyledGitHubLink> <span>{name}</span>
              {
                stars
                  ?
                  <span> -
                  <IconStar viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img">
                    <path
                      d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>
                  </IconStar>
                  stars
                </span>
                  : null
              }
            </Paragraph>
            <Paragraph>
              {bio}
            </Paragraph>
            <ParagraphLocation>
            <span>
              <IconLocation viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                <path
                  d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>
              </IconLocation>{location}</span>
              {
                email
                  ?
                  <StyledMailTo>
                    <IconMailTo viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                      <path
                        d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"/>
                    </IconMailTo>
                    email</StyledMailTo>
                  : null
              }
            </ParagraphLocation>
          </Right>
        </StyledContainer>
      </WrapperBorder>
    </div>
  );
};

const WrapperBorder = styled(Wrapper)`
  border-top: 1px solid rgba(0,0,0, 0.1);
`;

const Left = styled.div`
  width: 7%;
  text-align: left;
  padding-top: 20px;
`;

const Right = styled.div`
  width: 93%;
`;
const Paragraph = styled.p`
  margin: 10px;
`;
const ParagraphLocation = styled.p`
  margin: 10px;
  opacity: 0.5;
`;

const mailTo = ({ className, children, mail }) => (
  <a className={className} href={`mailto:${mail}`}>
    {children}
  </a>
);

const StyledMailTo = styled(mailTo)`
   text-decoration: none;
   cursor: pointer;
   color: #000;
    :hover {
      color: blue;
      }
    &::before{
      content: "";
   }
`;

const GitHubLink = ({ className, children, nickname }) => (
  <a className={className} target="_blank" href={`https://github.com/${nickname}`} rel="noopener noreferrer">
    {children}
  </a>
);

const StyledGitHubLink = styled(GitHubLink)`
  color: #0266d6;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
    :hover {
      text-decoration: underline;
  }
`;
const IconMailTo = styled.svg`
  flex: none;
  margin-left: 10px;
  margin-right: 3px;
  transition: fill 0.25s;
  vertical-align: bottom;
  ${StyledMailTo}:hover & {
    fill: #0266d6;
  }
`;

const IconLocation = styled.svg`
  flex: none;
  margin-right: 3px;
  vertical-align: bottom;
`;

const IconStar = styled.svg`
  flex: none;
  margin-left: 3px;
  margin-right: 3px;
  vertical-align: bottom;
  fill: gold;
`;

export default connect((state, ownProps) => {
  // console.log("ownProps", ownProps);
  const userSelector = expandUserByIndFactory();
  return {
    user: userSelector(state, ownProps)
  };
}, null)(UserCard);