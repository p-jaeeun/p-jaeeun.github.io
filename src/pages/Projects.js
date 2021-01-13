import React, { Component } from "react";
import Modal from "components/Modal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-subtitle">Projects</h3>
        <div className="project__list">
          <React.Fragment>
            <button onClick={this.openModal}> modal</button>
            <Modal
              open={this.state.modalOpen}
              close={this.closeModal}
              titie="create a modal"
            />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default Projects;
