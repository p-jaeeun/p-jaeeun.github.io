import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const { isOpen, close, name, number, desc, feature, stack, git } = props;

  return (
    <>
      {isOpen ? (
        <>
          <div className="Modal-overlay" onClick={close} />

          <div className="Modal">
            <h2 className="title">{name}</h2>
            <div className="content">
              <p>주제: {desc}</p>
              <p>인원: {number}</p>
              <p>특징: {feature}</p>
              <p>스택: {stack}</p>
              <p>Git:{git}</p>
            </div>

            <div className="button-wrap">
              <button onClick={close}>닫기</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
