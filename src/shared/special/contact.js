import "./contact.css";
import ContactInfo from "../UIElements/contact-info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { MAP__SRC } from "../../links";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";

import ContactForm from "./Form/form";
const Contact = () => {
  return (
    <div className="contact">
      <div className="information">
        <h2>Contact Us</h2>
        <ContactInfo type = "email" text = "contact@refinedresults.ca"/>
        <ContactInfo type = "phone" text = "940342234"/>
          <a href={MAP__SRC} target="_blank" className="location__link">
          <FontAwesomeIcon className="location" icon={faMapLocation} />
          <p>location</p>
          </a>
      </div>
      <ContactForm/>
    </div>
  );
};

export default Contact;
