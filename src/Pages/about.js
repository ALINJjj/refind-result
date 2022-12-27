import "./about.css";
import Carousel from "../shared/special/Carousel/Carousel";
import Slider from "react-slick";
import { HOME__SRC__2 } from "../links";
const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
  };
  return (
<>
<div className="about">
<h2>Who We Are</h2>
      <p>
        Refined Results was founded in 2012 with a single mission: to create a
        web of clients that spans across the globe. We believe building
        long-lasting relationships are the core to any successful relationship.
        Whether it's for the exchange of goods, services, or information; a
        valuable source can create an invaluable product. We approach each of
        our clients with unique methods tailored specifically to each situation.
      </p>
</div>
<Carousel about />

  <div className="about">
  
   

      <div className="ceo">
        <h1>a word from our CEO</h1>
        <h4>
          “Life is a storm, my young friend. You will bask in the sunlight one
          moment, be shattered on the rocks the next. What makes you a man is
          what you do when that storm comes.”
        </h4>
        <p>
          The power of language is just as important as presentation; they go
          hand in hand. There are countless ways to approach people of interest,
          express yourself, and share thoughts and ideas; unfortunately, many
          people we interact with daily are unaware of the impact certain words
          may have in directing the conversation to the desired outcome.
          Language; the forefront of any role in society. Authors, businessmen,
          professors; can all have differences in opinions regarding which
          methods are best for approaching business tactics. However, the root
          of any agreement or discussion is language. Mr. Devry, the lead
          consultant here at Refined Results embodies the idea of language being
          the most important factor in any business setting. He always refers to
          the notion that 'It's not what you say, but how you say it." The power
          of language is just as important as presentation; they go hand in
          hand. There are countless ways to approach people of interest, express
          yourself, and share thoughts and ideas; unfortunately, many people we
          interact with daily are unaware of the impact certain words may have
          in directing the conversation to the desired outcome. As young adults,
          we are pressured to study, not to learn; to obtain a degree,
          regardless of personal interest in the subject. Instead of being
          taught skills that apply in everyday life to excel in both personal
          and professional settings. How to dress, how to speak to others,
          humility when deserved, and insistence when forced; these are a few
          key qualities that should be taught, if not obligatory. Language is
          the most important tool. it allows us to effectively communicate,
          which happens to be the foundation of any business. Mr. Devry excels
          in achieving favourable results that are in the interest of both
          parties. He is versed in Law, ethics, and morality, as well as
          negotiation tactics. He accredits this to his studies in Law and
          Philosophy at Carleton University, Political economics at the American
          University of Science & Technology in Beirut, Lebanon, and his
          adoration of language which he gained through his studies, travel, and
          appreciation for the works of Dostoyevsky, Socrates, W.E. Henley,
          Machiavelli, and many others. Mr. Devry has both learned the value of
          language, in many of its forms and what can be discerned from it. ​ "I
          have made mistakes and learned from them, the right decisions and
          regretted them, and I have not only proven to others how great I am
          but more importantly to myself. This has played an immeasurable role
          in the growth I have experienced and will continue to experience."
        </p>
      </div>
    </div>
</>    
  );
};

export default About;



