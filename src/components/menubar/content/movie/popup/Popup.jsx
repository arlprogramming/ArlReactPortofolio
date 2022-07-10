import React, { useState } from "react";
import Modal from "./Modal";

const Popup = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Popup-container">
       <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Open Movie</button>
      <Modal open={openModal} onClose={()=> setOpenModal(false)} />
    </div>
  );
};

export default Popup;
