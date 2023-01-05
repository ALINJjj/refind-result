import "./book.css";
import Modal from "../shared/UIElements/Modal";
import { useState } from "react";
import BookButton from "../shared/special/book-button";
const Book = () => {
  const [showModal, setShowModal] = useState(false);
  const [showData,setShowData] = useState({
    free : "free 1 hour session",
    paid : "book a custom session"
  })

  const freeHoverstart = () => {
    setShowData({
      ...showData,
      free : "Free Consultation"
    })
  }
  const paidHoverstart = () => {
    setShowData({
      ...showData,
      paid : "Book now"
    })
  }

  const paidHoverEnd = () => {
    setShowData({
      ...showData,
      paid : "book a custom session"
    })
  
  }
  const freeHoverEnd = () => {
    setShowData({
      ...showData,
      free : "free 1 hour session"
    })
  
  }
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
            <BookButton onHoverEnd = {freeHoverEnd}  onHoverStart = {freeHoverstart}  onClick = {enterModal} className="recommended">{showData.free}</BookButton>
            <BookButton onHoverEnd = {paidHoverEnd} onHoverStart = {paidHoverstart} onClick = {enterModal}>{showData.paid}</BookButton>
          </div>
        </div>
    </div>
  );
};

export default Book;
