import React, { Component } from "react";
import Modal from "components/Modal/Modal";
import styled from "styled-components";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      project: [
        {
          id: 0,
          name: "90Parking Lot",
          desc:
            "회원과 비회원이 입출차, 요금정산이 가능한 무인주차 정산 시스템",
          feature:
            "웹 어플리케이션의 전반적인 흐름을 이해하고자 SSR 방식으로 구현해본 첫 개인 프로젝트",
          number: "1명",
          stack: "javscript,HTML,CSS,Node.js,Mysql",
          git: "https://github.com/p-jaeeun/miniproject",
          src: "/images/project1.png",
        },
        {
          id: 1,
          name: "HIDDENC",
          desc: "사람들에게 알려지지 않은 카페 정보를 공유할 수 있는 서비스",
          feature:
            "클라이언트 사이드 렌더링 방식으로 SPA 구현, 자바스크립트 MVC패턴 구현",
          number: "4명",
          stack: "javscript,HTML,CSS,Bootstrap,JAVA Spring,Maven,Mysql",
          git: "https://github.com/p-jaeeun/coffee-front",
          src: "/images/project2.png",
        },
        {
          id: 2,
          name: "BlackGreen",
          desc: "친환경 패션 브랜드를 소비자들에게 소개하는 서비스",
          feature: "WTM 해커톤에 참여하여 2주동안 리액트를 공부하여 SPA 구현",
          number: "3명",
          stack: "React.js,Node.js,HTML,CSS,Spring boot",
          git: "https://github.com/p-jaeeun/WTM_hackathon",
          src: "/images/project3.png",
        },
      ],
      selectedId: 0,
    };
  }

  openModal = (e, id) => {
    this.setState({
      isModalOpen: true,
      selectedId: id,
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <Container>
        <ProjectWrapper>
          <Title>Projects</Title>
          <ProjectList>
            {this.state.project.map((item) => (
              <React.Fragment key={item.id}>
                <div onClick={(e) => this.openModal(e, item.id)}>
                  <img
                    className="project__img"
                    src={item.src}
                    alt={item.name}
                  />
                </div>
              </React.Fragment>
            ))}
            {this.state.project
              .filter((item) => item.id === this.state.selectedId)
              .map((item) => (
                <Modal
                  key={item.id}
                  name={item.name}
                  desc={item.desc}
                  feature={item.feature}
                  git={item.git}
                  stack={item.stack}
                  number={item.number}
                  isOpen={this.state.isModalOpen}
                  close={this.closeModal}
                />
              ))}
          </ProjectList>
        </ProjectWrapper>
      </Container>
    );
  }
}

export default Projects;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 50px;
  /* header & footer height */
  margin: -50px 0 -40px 0;
  text-align: center;
`;

const ProjectWrapper = styled.div`
  padding-top: 250px;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
`;
