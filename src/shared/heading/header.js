import { useState } from "react";
import { LOGO__SRC } from "../../links";
import Avatar from "../special/Avatar";
import SideDrawer from "../UIElements/SideDrawer";
import Head from "./head";
import "./header.css";
import NavLinks from "./nav-links";
import AnimatedButton from "../UIElements/animated-button";
const Header = () => {
  const [sideDrawer, setSideDrawer] = useState(false);
  const [className,setClassName] = useState('');

  const toggleButton = () => {
      if(className === "on"){
          setClassName('');
      }
      else{
          setClassName("on");
      }
  }

  const closeDrawer = () => {
    toggleButton();
    setSideDrawer(false);
  };

  const openDrawer = () => {
    toggleButton()
    setSideDrawer(true);
  };
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <div className="title">
        <div className="logo">
          <Avatar src={LOGO__SRC} alt="logo" />
        </div>
        <h3>Refined Results</h3>
      </div>
      <NavLinks class="nav" />
      <div
        className="close__btn"
        onClick={sideDrawer ? closeDrawer : openDrawer}
      >
            <AnimatedButton className = {className} />

      
        {/* <span  className={`${sideDrawer ? "up__rotate" : ""}`} />
        {true && <span />}
        <span className={`${sideDrawer ? "down__rotate" : ""}`}/> */}
      </div>

      <SideDrawer show={sideDrawer} >
        <NavLinks onClick = {closeDrawer}/>
      </SideDrawer>
    </Head>
  );
};

export default Header;
