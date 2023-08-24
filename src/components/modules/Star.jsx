import {FaStar , FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import "./scss/Stars.scss"
const Star = () => {
  return (
    <div className="icon-style">
      <FaStar className="icons" />
      <FaStar className="icons"/>
      <FaStar className="icons"/> 
      <FaStarHalfAlt className="icons"/>
      <AiOutlineStar className="icons"/>
    </div>
  )
};


export default Star
