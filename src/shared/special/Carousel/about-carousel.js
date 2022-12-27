import Avatar from "../Avatar"
import "./about-carousel.css"

const AboutCarousel = ({image}) => {
    return <div className="about-carousel">
        <Avatar src = {image} alt = {image} className = "about-image"/>
    </div>
 }
export default AboutCarousel