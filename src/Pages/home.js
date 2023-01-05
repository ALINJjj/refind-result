import React from "react";
import { HOME__SRC, MAP__SRC, QUOTE } from "../links";
import Footer from "../shared/footer/footer";
import Header from "../shared/heading/header";
import Contact from "../shared/special/contact";
import FixedImage from "../shared/special/fixedImage";
import Quote from "../shared/special/quote";

import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <FixedImage />
      
      <div className="main-title"   data-aos="fade" data-aos-once="true">
      
        <h1>Consulting today, strategizing for tomorrow</h1>
      </div>
      <div className="testo">
        <h2>Our Testimonials Do the Talking</h2>
        <h6   data-aos="fade" 	data-aos-once="true">"You can quantify many things; quality is not one."</h6>
        <div className="testomonial__list">
        {QUOTE.map(data => <Quote data = {data} />)}
        </div>
      </div>
      <div>
        <Contact/>
      </div>
      {/* <div>
        <iframe src={MAP__SRC} height="300" width="400" referrerPolicy="no-referrer-when-downgrade">
            
        </iframe>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
