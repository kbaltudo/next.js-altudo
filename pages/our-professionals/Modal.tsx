import React from 'react';
import Styles from "./Blog.module.scss";

type ModalProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  buttons: {
    label: string;
    onClick: () => void;
    show: boolean;
  }[];
};

const Modal: React.FC<ModalProps> = ({ id, title, children, buttons }) => {
  return (
    <div className="modal fade" id={id} aria-labelledby={`${id}-label`} aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className={Styles.modal_header + " modal-content"}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`${id}-label`}>{title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">Save Changes</button>
            {buttons?.map((button, index) => (
              button.show && (
                <button key={index} type="button" className="btn btn-primary" onClick={button.onClick}>{button.label}</button>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
