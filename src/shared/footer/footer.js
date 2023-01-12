import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { COMPAGNIE_NAME, YEAR } from "../../links";
const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:contact@valcion.ca">
        Email Us
      </a>
      <a href="tel:+1 18337733463">18337733463</a>
      <div className="social__media">
        <a target="_blank" href="http://www.facebook.com">
          <FontAwesomeIcon className="back-white" icon={faFacebookF} />
        </a>
        <a target="_blank" href="http://www.twitter.com">
          <FontAwesomeIcon className="back-white" icon={faTwitter} />
        </a>
        <a target="_blank" href="http://www.Linkedin.com">
          <FontAwesomeIcon className="back-white" icon={faLinkedinIn} />
        </a>
      </div>
      <p>{YEAR} by {COMPAGNIE_NAME}.</p>
    </footer>
  );
};

export default Footer;
