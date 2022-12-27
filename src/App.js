import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Contact from "./shared/special/contact";
import Basic from "./Pages/Basic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./shared/special/Carousel/Carousel";
import Services from "./Pages/services";
import About from "./Pages/about";
import Book from "./Pages/book";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact"
            element={
              <>
                <Basic>
                  <Contact />
                </Basic>
              </>
            }
          />
          <Route
            path="client"
            element={
              <Basic>
                <Carousel />
              </Basic>
            }
          />
          <Route
            path="services"
            element={
              <Basic>
                <Services />
              </Basic>
            }
          />
          <Route
            path="/about"
            element={
              <Basic>
                <About />
              </Basic>
            }
          />
          <Route path="/book" element = {<Basic><Book/></Basic>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
