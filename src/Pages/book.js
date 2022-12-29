import "./book.css";
import Modal from "../shared/UIElements/Modal";
import { useState } from "react";
import BookButton from "../shared/special/book-button";
const Book = () => {
  const [showModal, setShowModal] = useState(false);

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
          <h1>CONSULTING BOOKING <br/> NOW</h1>
          <div className="book__buttons">
            <BookButton onClick = {enterModal} className="recommended">Free 1 houre</BookButton>
            <BookButton onClick = {enterModal}>Fully Consulting session</BookButton>
          </div>
        </div>
    </div>
  );
};

export default Book;
