import { NavLink } from "react-router-dom";
import "./nav-links.css";

const NavLinks = (props) => {
  return (
    <div className={`nav__links ${props.class}`}>
      <nav>
        <ul>
          <li>
            <NavLink onClick={props.onClick} to="/">Home</NavLink>
          </li>
          {/* <li>
            {" "}
            <NavLink onClick={props.onClick} to="/book">Book online</NavLink>
          </li> */}
          <li>
            {" "}
            <NavLink onClick={props.onClick} to="/client">Clients</NavLink>
          </li>
          <li>
            {" "}
            <NavLink onClick={props.onClick} to="/contact">Contact</NavLink>
          </li>
          <li>
            {" "}
            <NavLink onClick={props.onClick} to="/services">Services</NavLink>
          </li>
          <li>
            {" "}
            <NavLink onClick={props.onClick} to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;
