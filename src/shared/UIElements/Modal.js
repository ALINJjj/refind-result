import React, { useState } from "react";
import ReactDom from "react-dom";
import BackDrop from "./BackDrop";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../special/Form/form-components/Button";
import "./Modal.css";
const ModalComponent = (props) => {
 

  const content  = (
    <div className="modal">
    <div className="container">
      <div className="close">
          <FontAwesomeIcon icon={faXmark} onClick = {props.onClick}/>
      </div>
      <div className="message">
        sorry this service is note alowed for online bookings
        please contact aus for more information
      </div>
      <div className="button__in__modal">
          <Button className = "modal-button" onClick = {props.onClick} >Got it</Button>
      </div>
      
    </div>
  </div>);
  return ReactDom.createPortal(content,document.getElementById("modal")) 
};

const Modal = (props) => {
  return <React.Fragment>
    {props.show && <BackDrop onCancel={props.onCancel}/>}
    <CSSTransition
    in = {props.show}
    mountOnEnter
    unmountOnExit
    timeout={200}
    classNames="modal"
    >
        <ModalComponent {...props}/>
    </CSSTransition>
  </React.Fragment>

};

export default Modal;
