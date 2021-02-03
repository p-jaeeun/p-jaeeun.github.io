import React, { Component } from "react";
import Modal from "components/Modal/Modal";
import Portal from "components/Portal";
import "./Project.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      project: [
        {
          id: 0,
          name: "90Parking Lot",
          desc: "회원과 비회원이 이용 가능한 무인주차 정산 시스템",
          feature:
            "웹 어플리케이션의 전반적인 흐름을 이해하고자 SSR 방식으로 구현",
          role: "기획, 디자인, 서버 구축 및 DB연결, 입출차 기능 구현 ",
          number: "1명",
          stack: "Javscript,HTML,CSS,Node.js,Mysql",
          git: "https://github.com/p-jaeeun/miniproject",
          src: "/images/project1.png",
        },
        {
          id: 1,
          name: "HIDDENC",
          desc: "사람들에게 알려지지 않은 카페 정보를 공유할 수 있는 서비스",
          role: "기획, 디자인, VanillaJS MVC패턴 적용, 관리자 페이지 구현 ",
          feature:
            "VanillaJS MVC패턴 구현, 클라이언트 사이드 렌더링 방식으로 SPA 구현 ",
          number: "4명",
          stack: "Javscript,HTML,CSS,Bootstrap,JAVA Spring,Maven,Mysql",
          git: "https://github.com/p-jaeeun/coffee-front",
          src: "/images/project2.png",
        },
        {
          id: 2,
          name: "BlackGreen",
          desc: "친환경 패션 브랜드를 소비자들에게 소개하는 서비스",
          role: "기획, 디자인, axios 활용한 웹서버 통신, view 구현",
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
      <div className="project_container">
        <div className="project_wrapper">
          <h3 className="project_title">Projects</h3>
          <ul className="project_list">
            {this.state.project.map((item) => (
              <li>
                <div onClick={(e) => this.openModal(e, item.id)}>
                  <img
                    className="project__img"
                    src={item.src}
                    alt={item.name}
                  />
                </div>
              </li>
            ))}
            {this.state.project
              .filter((item) => item.id === this.state.selectedId)
              .map((item) => (
                <Portal elementId="modal-root">
                  <Modal
                    key={item.id}
                    name={item.name}
                    desc={item.desc}
                    role={item.role}
                    feature={item.feature}
                    git={item.git}
                    stack={item.stack}
                    number={item.number}
                    isOpen={this.state.isModalOpen}
                    close={this.closeModal}
                  />
                </Portal>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
