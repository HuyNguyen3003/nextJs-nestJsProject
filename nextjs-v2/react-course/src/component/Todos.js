import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

export default function Todos(props) {
  const { text } = props;

  const [modalIsOpen, setmodalIsOpen] = useState(false);

  //const [BackdropIsOpen, setBackdropIsOpen] = useState(false);

  const deleteHandle = () => {
    setmodalIsOpen(true);
  };

  const closeModalHandle = () => {
    setmodalIsOpen(false);
  };

  return (
    <>
      <div className="card ">
        <h2>{text}</h2>
        <div className="actions ">
          <button className="btn" onClick={deleteHandle}>
            Delete
          </button>
        </div>
      </div>

      {modalIsOpen && (
        <Modal onCancel={closeModalHandle} onConfirm={closeModalHandle} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandle} />}
    </>
  );
}
