import React, { Component } from "react";
import styled from "styled-components";

class About extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-subtitle">
          "새로운 것을 학습하는 즐거움을 아는 프론트엔드 개발자,박재은입니다."
        </h3>
        <div>
          <img className="profile" src="/images/profile.png" alt="profile" />
        </div>
        <AboutList>
          <div>
            <AboutText>
              <h2>Education</h2>
              <p className="text-content">
                2020.07~2020.10 구공팩토리 코딩부트캠프 수료
              </p>
            </AboutText>
            <AboutText>
              <h2>Contact</h2>
              <p className="text-content">
                <i class="fas fa-envelope"></i>
                parkje91@gmail.com
              </p>
              <p className="text-content">
                <i class="fab fa-github"></i>p-jaeeun
              </p>
            </AboutText>
          </div>
          <div>
            <h2>Skills</h2>
            <div>
              <h4>Front-end</h4>
              <img src="/images/javascript.png" alt="javascript" />
              <img src="/images/html.png" alt="html" />

              <img src="/images/css.png" alt="css" />
              <img src="/images/react.png" alt="react" />
            </div>
            <div>
              <h4>Back-end</h4>
              <img src="/images/nodejs.png" alt="nodejs" />
            </div>
            <div>
              <h4>Devops</h4>
              <img src="/images/github.png" alt="github" />
              <img src="/images/slack.png" alt="slack" />
            </div>
          </div>
        </AboutList>
      </div>
    );
  }
}

export default About;

const AboutList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: col;
  justify-content: center;
`;

const AboutContent = styled.div``;

const AboutItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SkillItem = styled.div`
  padding: 0 50px;
`;

const AboutText = styled.div`
  text-align: left;
`;
