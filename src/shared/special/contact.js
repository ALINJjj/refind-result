import "./contact.css";
import ContactInfo from "../UIElements/contact-info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { CONTACT_TEMPLATE, MAP__SRC } from "../../links";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";

import ContactForm from "./Form/form";
import { useState } from "react";
const Contact = () => {

  return (
    <div className="contact">
      <div className="information">
        <h2>Contact Us</h2>
        <ContactInfo type = "email" text = "contact@valcion.ca"/>
        <ContactInfo type = "phone" text = "(833) 773-3463"/>
          <a href={MAP__SRC} target="_blank" className="location__link">
          <FontAwesomeIcon className="location" icon={faLocationPin} />
          <p>Location</p>
          </a>
      </div>
      <ContactForm templateID = {CONTACT_TEMPLATE}/>
    </div>
  );
};

export default Contact;
