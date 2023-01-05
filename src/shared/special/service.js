import "./service.css";
import Avatar from "./Avatar";
const Service = (props) => {
  const {data} = props;
  const right = !!props.right;

  return (
    <div className="service" data-aos="fade" >
      {!right && data && (
        <Avatar
          className="image"
          src={data.image}
          alt="service"
        />
      )}
      {data && <div className="service__information">
        <h5>{data.title}</h5>
        <p>
          {data.letter}
        
        </p>
        <p>{data.author}</p>
        <p className="top">
          {data.text}
        </p>
      </div>}
      {right && data && (
        <Avatar
          className="image"
          src={data.image}
          alt="service"
        />
      )}{" "}
    </div>
  );
};

export default Service;
