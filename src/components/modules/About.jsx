import "./scss/About.scss"
import img from "../../assets/Category/Headphones.jpg"
const About = () => {
  return (
    <div className="wrapper">
      <div className="background-container">
        <div className="bg-1"></div>
      
      </div>
      <div className="about-container">
        <div className="image-container">
          <img src={img} alt="" />
        </div>
        <div className="text-container">
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            porro rerum cupiditate expedita <br />
            distinctio nisi nulla ipsum libero molestiae minima Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquid, ipsum libero
            molestiae
          </p>
          <a href="">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default About;
