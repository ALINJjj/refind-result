import Input from "./form-components/Input";
import "./form-components/Button";
import "./form.css";
import Button from "./form-components/Button";
import { useState } from "react";
 
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../validator/validators";
import useForm from "../../../hooks/form-hook";
import { useRef } from "react";
import Modal from "../../UIElements/Modal";
import { sendEmail } from "../../../hooks/emailJS";
import { CONTACT_TEMPLATE } from "../../../links";
const ContactForm = (props) => {
  const [showModal, setShowModal] = useState(false);
  const activeModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const formRef = useRef();
  const sendHandler = (e) => {
    e.preventDefault();

    if (formState.formIsValid) {
      sendEmail(CONTACT_TEMPLATE,formRef.current)
    }
    e.target.reset();
    activeModal();
  };

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      subject: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  
  return (
    <div className="contact__form">
      <Modal
        message={`Your message has been sent .
    we will contact you a soon as possible`}
        onClick={closeModal}
        show={showModal}
      />
      <form ref={formRef} onSubmit={sendHandler}>
        <Input
          onInput={inputHandler}
          id="name"
          name="user_name"
          label=" name *"
          placeholder="Enter your name "
          validator={VALIDATOR_REQUIRE()}
        />
        <Input
          onInput={inputHandler}
          id="email"
          name="user_email"
          label="Email *"
          placeholder="Enter your email "
          validator={VALIDATOR_EMAIL()}
        />
      

          <Input
            onInput={inputHandler}
            id="subject"
            name="subject"
            label="Subject *"
            placeholder="type the subject "
            validator={VALIDATOR_REQUIRE()}
          />
        
        <Input
          onInput={inputHandler}
          id="message"
          name="user_message"
          textAria
          label="Message *"
          placeholder="Type your message here ... "
          
          validator={VALIDATOR_MINLENGTH(5)}
        />

        <Button type="submit" isValid={!formState.formIsValid}>
         Submit
        </Button>
      </form>
    </div>
  );
};
export default ContactForm;
