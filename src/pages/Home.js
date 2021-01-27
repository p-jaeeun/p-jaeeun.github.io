import React, { Component } from "react";
import styled from "styled-components";

class Home extends Component {
  render() {
    return (
      <div className="home__container">
        <HomeWrapper>
          <Title>Park Jae Eun</Title>
          <Subtitle>Front-end Engineer, Web Developer</Subtitle>
        </HomeWrapper>
      </div>
    );
  }
}

export default Home;

const HomeWrapper = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-size: 5.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: capitalize;
  white-space: nowrap;
  color: transparent;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  &::before {
    content: "Front-end Engineer, Web Developer";
    position: absolute;
    width: 100%;
    color: #000;
    overflow: hidden;
    border-right: 1px solid #bebebe;
    white-space: nowrap;
    /* letter-spacing: 0.1rem; */
    animation: typing 6s steps(35, end), blink 0.75s step-end infinite;
  }
  @keyframes typing {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #bebebe;
    }
  }
`;
