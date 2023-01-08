import "./book.css";
import Modal from "../shared/UIElements/Modal";
import { useState } from "react";
import BookButton from "../shared/special/book-button";
import useForm from "../hooks/form-hook";
const Book = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAfterModal, setShowAfterModal] = useState(false);

  const [Type, setType] = useState("");
  const [showData, setShowData] = useState({
    free: "Free Consultation",
    paid: "Paid Consultation",
  });

  const activeShowAfterModal = () => {
    setShowAfterModal(true);
  };
  const closeShowAfterModal = () => {
    setShowAfterModal(false);
  };
  const freeHoverstart = () => {
    setShowData({
      ...showData,
      free: "Book now",
    });
  };
  const paidHoverstart = () => {
    setShowData({
      ...showData,
      paid: "Book now",
    });
  };

  const paidHoverEnd = () => {
    setShowData({
      ...showData,
      paid: "Paid Consultation",
    });
  };
  const freeHoverEnd = () => {
    setShowData({
      ...showData,
      free: "Free Consultation",
    });
  };
  const enterFreeModal = () => {
    setType("free");
    setShowModal(true);
  };
  const enterPaidModal = () => {
    setType("Not Free");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="book ">
      {showModal && (
        <Modal
          openAfterModal={activeShowAfterModal}
          closeShowAfterModal={closeShowAfterModal}
          close={closeModal}
          order
          type={Type}
          message="Oops! This service is currently unavailable, please contact us by email/phonenumber for further information"
          onClick={closeModal}
          show={showModal}
          info="remove"
        />
      )}
      {showAfterModal && (
        <Modal
          message="Your application is been sent to we will contact u for more information"
          show={showAfterModal}
          onClick={closeShowAfterModal}
          info="remove"
        />
      )}
      <div className="book">
        <h1>
          CONSULTING BOOKING <br /> NOW
        </h1>
        <div className="book__buttons">
          <BookButton
            onHoverEnd={freeHoverEnd}
            onHoverStart={freeHoverstart}
            onClick={enterFreeModal}
            className="recommended"
          >
            {showData.free}
          </BookButton>
          <BookButton
            onHoverEnd={paidHoverEnd}
            onHoverStart={paidHoverstart}
            onClick={enterPaidModal}
          >
            {showData.paid}
          </BookButton>
        </div>
      </div>
    </div>
  );
};

export default Book;
