import "./book.css";
import Modal from "../shared/UIElements/Modal";
import { useState } from "react";
import BookButton from "../shared/special/book-button";
import useForm from "../hooks/form-hook";
import { FREE, PAID } from "../links";
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
    setType(FREE);
    setShowModal(true);
  };
  const enterPaidModal = () => {
    setType(PAID);
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
          onClick={closeModal}
          show={showModal}
          info="remove"
        />
      )}
      {showAfterModal && (
        <Modal
          message={`We have received your request and will send you a confirmation email shortly to verify your appointment.

If you have any further questions you can reply to the confirmation email you receive or give us a call at 1-833-773-3463 `}
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
