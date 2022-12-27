import "./quote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
const Quote = () => {
  return (
    <div className="quote">
      <div className="icon">
        <FontAwesomeIcon className="quote__icon" icon={faQuoteRight} />
      </div>
      <p>
        "The team at Refined Results was very helpful with modifying our methods
        of communication & business conduct to maneuver around the pandemic."
      </p>
      <h5>Pronto Movers</h5>
     
    </div>
  );
};

export default Quote;
