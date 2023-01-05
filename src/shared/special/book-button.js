import "./book-button.css";
import { motion } from "framer-motion";
const BookButton = (props) => {
  return (
    <motion.div
      onHoverStart={props.onHoverStart}
      onHoverEnd = {props.onHoverEnd}
       onClick={props.onClick}
      className = {`book-button ${props.className ? props.className : ""}`}
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    >
        {props.children}
    </motion.div>
  );
};
export default BookButton;
