import React, { Component } from "react";
import styled from "styled-components";

class About extends Component {
  render() {
    return (
      <Container>
        <AboutTitle>
          "새로운 것을 학습하는 즐거움을 아는 프론트엔드 개발자, 박재은입니다."
        </AboutTitle>
        <React.Fragment>
          <img
            src="/images/profile.png"
            alt="profile"
            width="180px"
            border-radius="50%"
          />
        </React.Fragment>
        <AboutList>
          <AboutContent>
            <AboutTextWrapper>
              <h2>Education</h2>
              <AboutText>
                2020.07~2020.10 <b>구공팩토리</b> 코딩부트캠프 수료
              </AboutText>
            </AboutTextWrapper>
            <AboutTextWrapper>
              <h2>Contact Me</h2>
              <AboutText>
                <i class="fas fa-phone icon"></i>
                010.9991.4194
              </AboutText>
              <AboutText>
                <i class="fas fa-envelope icon"></i>
                parkje91@gmail.com
              </AboutText>
              <AboutText>
                <i class="fab fa-github icon"></i>p-jaeeun
              </AboutText>
            </AboutTextWrapper>
          </AboutContent>
          <AboutContent>
            <h2>Skills</h2>
            <SkillList>
              <SkillItem>
                <h3>Front-end</h3>
                <ul>
                  <FrontList>
                    <img src="/images/javascript.png" alt="javascript" />
                    <SkillDesc>VanillaJS, es5와 es6 문법의 이해</SkillDesc>
                  </FrontList>
                  <FrontList>
                    <img src="/images/html.png" alt="html" />
                    <SkillDesc>html5 웹표준 이해, 의미있는 마크업</SkillDesc>
                  </FrontList>
                  <FrontList>
                    <img src="/images/css.png" alt="css" />
                    <SkillDesc>
                      레이아웃을 구성하고, 반응형 디자인 구현 가능
                    </SkillDesc>
                  </FrontList>
                  <FrontList>
                    <img src="/images/react.png" alt="react" />
                    <SkillDesc>컴포넌트의 이해와 spa 구현 가능</SkillDesc>
                  </FrontList>
                </ul>
              </SkillItem>
              <SkillItem>
                <h3>Back-end</h3>
                <ul>
                  <FrontList>
                    <img src="/images/nodejs.png" alt="nodejs" />
                    <SkillDesc>node를 이용한 SSR환경 개발 경험</SkillDesc>
                  </FrontList>
                </ul>
                <h3>Devops</h3>
                <ul>
                  <FrontList>
                    <img src="/images/github.png" alt="github" />
                    <SkillDesc>git을 이용한 형상 관리</SkillDesc>
                  </FrontList>
                </ul>
              </SkillItem>
            </SkillList>
          </AboutContent>
        </AboutList>
      </Container>
    );
  }
}

export default About;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 50px;
  /* header & footer height */
  margin: -50px 0 -40px 0;
  text-align: center;
`;

const AboutTitle = styled.h3`
  padding-top: 5rem;
  font-size: 1.5rem;
  font-weight: 100;
`;

const AboutList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: col;
  justify-content: center;
`;

const AboutContent = styled.div`
  padding-left: 80px;
`;

const AboutTextWrapper = styled.div`
  text-align: left;
  padding-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 0.9rem;
  margin: 10px;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SkillItem = styled.div`
  padding-right: 20px;
`;

const SkillDesc = styled.p`
  text-align: center;
  font-size: 0.8rem;
  padding: 10px 0 0 10px;
`;

const FrontList = styled.li`
  display: flex;
  flex-direction: row;
  text-align: center;
`;
