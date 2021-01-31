import React, { Component } from "react";
import styled from "styled-components";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <HomeWrapper>
          <Title>Park Jae Eun</Title>
          <Subtitle>Front-end Engineer, Web Developer</Subtitle>
        </HomeWrapper>
      </HomeContainer>
    );
  }
}

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  padding-top: 50px;
  margin: -50px 0 -40px 0;
  top: 0;
  left: 0;
  z-index: -10;
  /* footer height */
  background: url("/images/main.jpg");
  background-size: cover;
  background-attachment: fixed;
  text-align: center;
`;
const HomeWrapper = styled.div`
  width: 100%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-size: 5.5rem;
  @media screen and (min-width: 768px) and (max-width: 1330px) {
    font-size: 5rem;
  }
  /* Tablet */
  @media screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 4rem;
  }
  /* Mobile */
  @media screen and (max-width: 480px) {
    font-size: 3.3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 150;
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

  @media screen and (min-width: 768px) and (max-width: 1330px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
