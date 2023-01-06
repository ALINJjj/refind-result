import Slider from "react-slick";
import { ABOUT__SRC, HOME__SRC } from "../../../links";
import CarouselClient from "./Carousel-client";
import { CLIENT__DATA__TO__SHOW } from "../../../links";
import AboutCarousel from "./about-carousel";
const Carousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
  };

  const settings_2 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
  };
  return (
    <div>
      <h2></h2>
      {!props.about && (
        <Slider
          {...settings}
        >
          {CLIENT__DATA__TO__SHOW.map((data) => (
            <div>
              <h3>
                <CarouselClient key={data.id}  data={data} />
              </h3>
            </div>
          ))}
        </Slider>
      )}
      {props.about && (
        <Slider {...settings_2}>
          {ABOUT__SRC.map((image,index) => (
            <div>
              <h3>
                <AboutCarousel key={index} image={image} />
              </h3>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Carousel;
