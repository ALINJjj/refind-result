import { SERVICES__DATA } from "../links";
import Service from "../shared/special/service";
import useWindowDimensions from "../window";
import "./services.css";

const Services = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div className="services">
      <h2>Our Services</h2>
      <p>Discover Our Expertise</p>
      {SERVICES__DATA.map((data, index) => {
        if (width > 845) {
          if (index % 2 !== 0) {
            return <Service  key={data.id} data={data} right />;
          } else {
            return <Service  key={data.id} data={data} />;
          }
        }
        return <Service key={data.id} data = {data} />
      })}
      <Service />
    </div>
  );
};
export default Services;
