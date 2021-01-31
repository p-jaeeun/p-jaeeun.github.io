import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="about_title">
          "새로운 것을 학습하는 즐거움을 아는 프론트엔드 개발자, 박재은입니다."
        </h3>
        <div className="about_profile">
          <img src="/images/profile.png" alt="profile" />
        </div>
        <div className="about_list">
          <div className="about_item">
            <div className="content-wrapper">
              <div className="about_content">
                <h2 className="about-text">Education</h2>
                <p>
                  2020.07~2020.10 <b>구공팩토리</b> 코딩부트캠프 수료
                </p>
              </div>
              <div className="about_content">
                <h2 className="about-text">Contact Me</h2>
                <p>
                  <i class="fas fa-phone icon"></i>
                  010.9991.4194
                </p>
                <p>
                  <i class="fas fa-envelope icon"></i>
                  parkje91@gmail.com
                </p>
                <p>
                  <i class="fab fa-github icon"></i>p-jaeeun
                </p>
              </div>
            </div>
          </div>
          <div className="about_item ">
            <h2 className="about-text">Skills</h2>
            <div className="skill_list">
              <div className="skill_item">
                <h3>Front-end</h3>
                <ul>
                  <li>
                    <img src="/images/javascript.png" alt="javascript" />

                    <p>VanillaJS, es5와 es6 문법의 이해</p>
                  </li>
                  <li>
                    <img src="/images/html.png" alt="html" />
                    <p>html5 웹표준 이해, 의미있는 마크업</p>
                  </li>
                  <li>
                    <img src="/images/css.png" alt="css" />
                    <p>레이아웃을 구성하고, 반응형 디자인 구현 가능</p>
                  </li>
                  <li>
                    <img src="/images/react.png" alt="react" />
                    <p>컴포넌트의 이해와 spa 구현 가능</p>
                  </li>
                </ul>
              </div>
              <div className="skill_item ">
                <h3>Back-end</h3>
                <ul>
                  <li>
                    <img src="/images/nodejs.png" alt="nodejs" />
                    <p>node를 이용한 SSR환경 개발 경험</p>
                  </li>
                </ul>
                <h3>Devops</h3>
                <ul>
                  <li>
                    <img src="/images/github.png" alt="github" />
                    <p>git을 이용한 형상 관리</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
