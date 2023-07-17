import React from "react";

export default function Modal(props) {
  const cancelHandle = () => {
    props.onCancel();
  };

  const confirmHandle = () => {
    props.onConfirm();
  };

  return (
    <div className="modal">
      <p>Are u sure?</p>
      <button className="btn btn---alt" onClick={cancelHandle}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandle}>
        Confirm
      </button>
    </div>
  );
}
