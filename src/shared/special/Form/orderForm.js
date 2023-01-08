import Input from "./form-components/Input";
import "./form-components/Button";
import "./form.css";
import Button from "./form-components/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../validator/validators";
import useForm from "../../../hooks/form-hook";
import { useRef } from "react";
import { sendEmail } from "../../../hooks/emailJS";
import { ORDER_TEMLATE } from "../../../links";
const OrderForm = (props) => {
 
  const formRef = useRef();
  const sendHandler = (e) => {
    e.preventDefault();
    if (formState.formIsValid) {
          sendEmail(ORDER_TEMLATE, formRef.current)
    }
    e.target.reset();
    props.close();
    props.openAfterModal()
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
      message: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  return (
    <div className="contact__form">
   
      <form ref={formRef} onSubmit={sendHandler}>
        <Input
          onInput={inputHandler}
          id="name"
          name="user_name"
          label="Name *"
          placeholder="Enter your name "
          validator={VALIDATOR_REQUIRE()}
        />
        <input onChange={()=>{}}  name="type" value={props.type} style={{display: "none"}} />
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
          id="message"
          name="about__message"
          textAria
          label="Enquiries *"
          placeholder="Explain Briefly What Your Needs Are ..."
          validator={VALIDATOR_MINLENGTH(10)}
        />

        <Button type="submit" isValid={!formState.formIsValid}>
         Book
        </Button>
      </form>
    </div>
  );
};
export default OrderForm;
