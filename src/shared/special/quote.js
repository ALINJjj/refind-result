import "./quote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
const Quote = ({data}) => {
  return (
    <div className="quote">
      <div className="icon">
        <FontAwesomeIcon className="quote__icon" icon={faQuoteRight} />
      </div>
      <p data-aos="fade" 	data-aos-once="true">
          {data.quote}
        </p>
      <h5 data-aos="fade" 	data-aos-once="true">{data.author}</h5>
     
    </div>
  );
};

export default Quote;
