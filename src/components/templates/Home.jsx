// Components
import Banner from "../modules/Banner";
import Category from "../modules/Category";
import Products from "../layout/Products";
import Newsletter from "../modules/NewsLetter";
// Styling
import "./scss/Home.scss"

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products />
        </div>
      </div>
      <Newsletter/>  
    </div>
  )
}

export default Home