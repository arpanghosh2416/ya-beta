import React, { useRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import css from "./Modal.module.css";

const PORTAL_MODAL_ROOT = document.getElementById("portal-modal-root");

const ModalComponent = (props, ref) => {
  const { children } = props;
  const modalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    toggle: () => {
      modalRef.current?.classList.toggle("opacity-0");
      modalRef.current?.classList.toggle("invisible");
    },
  }));

  return (
    <main
      ref={modalRef}
      className="invisible fixed inset-0 z-[2000] flex h-screen w-full items-center justify-center bg-black bg-opacity-60 opacity-0 transition-all duration-200"
    >
      <article
        className={classNames(
          css.modalContainer,
          "flex h-[95vh] items-center justify-center",
        )}
      >
        <section className="flex max-h-full w-full flex-col rounded bg-white">
          <div className="flex justify-end border-b border-gray-300 p-4">
            <button
              onClick={() => ref.current.toggle()}
              className="group rounded bg-white px-1.5 hover:bg-primary"
            >
              <i className="fa-solid fa-xmark text-primary group-hover:text-white"></i>
            </button>
          </div>

          {/* custom-scrollbar is defined at index.css */}
          <div className="custom-scrollbar overflow-auto p-4">{children}</div>
        </section>
      </article>
    </main>
  );
};

const Modal = (props, ref) => {
  return ReactDOM.createPortal(ModalComponent(props, ref), PORTAL_MODAL_ROOT);
};

export default React.forwardRef(Modal);
