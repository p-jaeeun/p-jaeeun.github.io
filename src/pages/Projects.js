import React, { Component } from "react";
import Modal from "components/Modal/Modal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
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
            <React.Fragment>
              <div onClick={this.openModal}>
                <img
                  className="project__img"
                  src="/images/project1.png"
                  alt="90parkinglot"
                />
              </div>

              <Modal
                name="90PARKING LOT"
                isOpen={this.state.isModalOpen}
                close={this.closeModal}
              >
                content내용
              </Modal>
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
