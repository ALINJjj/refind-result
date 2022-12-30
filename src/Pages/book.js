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
          message="Oops! This service is currently unavailable, please contact us by email/phonenumber for further information"
          onClick={closeModal}
          show={true}
          info="remove"
        />
      )}
      <div className="book">
          <h1>CONSULTING BOOKING <br/> NOW</h1>
          <div className="book__buttons">
            <BookButton onClick = {enterModal} className="recommended">free 1 hour session</BookButton>
            <BookButton onClick = {enterModal}>book a custom session</BookButton>
          </div>
        </div>
    </div>
  );
};

export default Book;
