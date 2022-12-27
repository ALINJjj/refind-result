import "./contact-info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const ContactInfo = (props) => {
  return (
    <div className="c_info">
      <span>
        <FontAwesomeIcon className="icon" icon={props.type ==="email" ? faEnvelope : faPhone} />
      </span>
      {props.type === "email" && (
        <a href={`mailto:${props.text}`}>{props.text}</a>
      )}
    {
        props.type === "phone" && <a href={`tel:${props.text}`}>{props.text}</a>
    }
    </div>
  );
};
export default ContactInfo;
