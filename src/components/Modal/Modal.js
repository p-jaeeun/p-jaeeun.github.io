import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const { isOpen, close, name, number } = props;

  return (
    <>
      {isOpen ? (
        <React.Fragment>
          <div className="Modal-overlay" onClick={close} />

          <div className="Modal">
            <h2 className="title">{name}</h2>
            <div className="content">
              <p>인원:{number}</p>
            </div>

            <div className="button-wrap">
              <button onClick={close}>닫기</button>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </>
  );
};

export default Modal;
