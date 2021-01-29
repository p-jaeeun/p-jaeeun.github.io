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
          id: 1,
          name: "90Parking Lot",
          number: "1명",
          src: "/images/project1.png",
        },
        { id: 2, name: "HIDDENC", number: "4명", src: "/images/project2.png" },
        {
          id: 3,
          name: "BlackGreen",
          number: "3명",
          src: "/images/project3.png",
        },
      ],
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
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
                <div onClick={this.openModal}>
                  <img
                    className="project__img"
                    src={item.src}
                    alt={item.name}
                  />
                </div>

                <Modal
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  number={item.number}
                  isOpen={this.state.isModalOpen}
                  close={this.closeModal}
                />
              </React.Fragment>
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
