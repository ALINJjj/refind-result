import "./fixedImage.css"
const FixedImage = (props) => {

    return <img className="fixed-image" src= {props.image} alt={props.alt}/>
};
export default FixedImage