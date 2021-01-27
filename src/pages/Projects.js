import React, { Component } from "react";
import Modal from "components/Modal/Modal";

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
          src: "/images/project1.jpeg",
        },
        { id: 2, name: "HIDDENC", number: "4명", src: "/images/project1.jpeg" },
        {
          id: 3,
          name: "BlackGreen",
          number: "3명",
          src: "/images/project3.jpeg",
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
      <div className="container">
        <div className="project__wrapper">
          <h3 className="text-subtitle">Projects</h3>
          <div className="project__list">
            {this.state.project.map((item) => (
              <React.Fragment key={item.id.toString()}>
                <div onClick={this.openModal}>
                  <img
                    className="project__img"
                    src={item.src}
                    alt={item.name}
                  />
                </div>
                <Modal
                  id={item.id}
                  name={item.name}
                  number={item.number}
                  isOpen={this.state.isModalOpen}
                  close={this.closeModal}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
