import Avatar from "../Avatar";
import "./Carousel-client.css";

const CarouselClient = ({ data }) => {
  return (
    <div className="client">
      <Avatar src={data.image} className="for__client" />
      {data.text && <p>{data.text}</p>}
    </div>
  );
};

export default CarouselClient;
