import "./Avatar.css";
const Avatar = (props) => {
  return <img className={!!props.className ? props.className : "avatar"} src={props.src} alt={props.alt} />;
};
export default Avatar;
