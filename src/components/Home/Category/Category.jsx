import "./Category.scss";
import Headphones from "../../../assets/Category/Headphones.jpg"
const Category = () => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div className="category">
            <img src={Headphones} alt="headphone-img" />
        </div>
        <div className="category">
            <img src={Headphones} alt="headphone-img" />
        </div>
        <div className="category">
            <img src={Headphones} alt="headphone-img" />
        </div>
        <div className="category">
            <img src={Headphones} alt="headphone-img" />
        </div>
      </div>
    </div>
  )
}

export default Category
