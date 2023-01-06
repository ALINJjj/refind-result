import "./Button.css";
const Button = (props) => {
 
  return (
    <button
      className={props.className ? props.className : 'button'}
      disabled = {props.isValid}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
