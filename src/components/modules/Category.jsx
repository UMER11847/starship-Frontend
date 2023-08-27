// Styling
import "./scss/Category.scss";
// Assets
import Headphones from "../../assets/Category/Headphones.jpg"
import Laptop from "../../assets/Category/Laptop.jpg"
import Speaker from "../../assets/Category/Speaker.jpg"
import Watch from "../../assets/Category/SmartWatch.jpg"

const Category = ({ setCategory }) => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div onClick={() => setCategory("headphone")} className="category">
            <img src={Headphones} alt="headphone-img" />
        </div>
        <div onClick={() => setCategory("laptop")} className="category">
            <img src={Laptop} alt="headphone-img" />
        </div>
        <div onClick={() => setCategory("speaker")} className="category">
            <img src={Speaker} alt="headphone-img" />
        </div>
        <div onClick={() => setCategory("watch")} className="category">
            <img src={Watch} alt="headphone-img" />
        </div>
      </div>
    </div>
  )
}

export default Category