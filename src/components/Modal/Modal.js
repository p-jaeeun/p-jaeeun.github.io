import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const { isOpen, close, name, number, desc, stack, git, role } = props;

  return (
    <>
      {isOpen ? (
        <>
          <div className="Modal-overlay" onClick={close} />

          <div className="Modal">
            <h2 className="title">{name}</h2>
            <div className="content">
              <p>
                <span className="content-subtitle">주제</span> {desc}
              </p>
              <p>
                <span className="content-subtitle">인원</span> {number}
              </p>

              <p>
                <span className="content-subtitle">역할</span> {role}
              </p>
              <p>
                <span className="content-subtitle">스택</span> {stack}
              </p>
              <p>
                <a href={git} className="content-subtitle gitlink">
                  ▶︎▶︎ Go to Github <i class="fab fa-github "></i>
                </a>
              </p>
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
