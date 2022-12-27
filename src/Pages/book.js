import "./book.css";
import Modal from "../shared/UIElements/Modal";
import { CONSULTING__SRC } from "../links";
import { useState } from "react";
import FreeConsult from "../shared/special/free-consult";
const Book = () => {
  const [showModal, setShowModal] = useState(true);

  const enterModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="book ">
      {showModal && (
        <Modal
          message="  sorry this service is note alowed for online bookings
        please contact aus for more information"
          onClick={closeModal}
          show={true}
          info="remove"
        />
      )}
      <div className="book">
        <FreeConsult />
      </div>
    </div>
  );
};

export default Book;
