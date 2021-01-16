import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const { isOpen, close, name } = props;
  return (
    <>
      {isOpen ? (
        <React.Fragment>
          <div className="Modal-overlay" onClick={close} />

          <div className="Modal">
            <p className="title">{name}</p>
            <div className="content">
              <p>{props.children}</p>
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
