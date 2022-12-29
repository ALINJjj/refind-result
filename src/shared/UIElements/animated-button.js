import { useState } from "react";
import "./animated-button.css";
const AnimatedButton = (props) => {
    
  return <button id="btn" className={props.className}>
    <span />
    <span />
    <span />
  </button>;
};

export default AnimatedButton;
