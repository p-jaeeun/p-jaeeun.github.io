import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    const { open, close } = this.props;

    return (
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <header>
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{this.props.children}</main>
            <footer>
              <button className="close" onClick={close}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    );
  }
}

export default Modal;
