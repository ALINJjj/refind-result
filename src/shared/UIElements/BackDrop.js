import ReactDOM from "react-dom";
import './BackDrop.css'
const BackDrop = (props) => {

    return  ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onCancel}>

    </div>,
    document.getElementById('backdrop'))
}

export default BackDrop;
