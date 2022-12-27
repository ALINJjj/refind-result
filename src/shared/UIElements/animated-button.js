import { useState } from "react";
import "./animated-button.css";
const AnimatedButton = () => {
    const [className,setClassName] = useState('');

    const toggleButton = () => {
        if(className === "on"){
            setClassName('');
        }
        else{
            setClassName("on")
        }
    }
  return <button id="btn" onClick={toggleButton} className={className}>
    <span />
    <span />
    <span />
  </button>;
};

export default AnimatedButton;
