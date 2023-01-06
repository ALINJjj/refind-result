import React, { useState } from "react";
import ReactDom from "react-dom";
import BackDrop from "./BackDrop";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../special/Form/form-components/Button";
import ContactForm from "../special/Form/form"
import "./Modal.css";
import { ORDER_TEMLATE } from "../../links";
import OrderForm from "../special/Form/orderForm";
const ModalComponent = (props) => {
  const order = !!props.order;

  const content = (
    <React.Fragment>
      <BackDrop show={props.show} />
      <div className={order ? "order-modal" : "modal "}>
        <div className="container">
          <div className="close">
            <FontAwesomeIcon icon={faXmark} onClick={props.onClick} />
          </div>
          {!order ? (
            <>
              <div className="message">{props.message}</div>
              <div className="button__in__modal">
                <Button className="modal-button" onClick={props.onClick}>
                  Got it
                </Button>
              </div>{" "}
            </>
          ) : (
            <OrderForm closeShowAfterModal={props.closeShowAfterModal} openAfterModal = {props.openAfterModal} close = {props.close} type = {props.type}  />
          )}
        </div>
      </div>
    </React.Fragment>
  );
  return ReactDom.createPortal(content, document.getElementById("modal"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200}>
        <ModalComponent {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
