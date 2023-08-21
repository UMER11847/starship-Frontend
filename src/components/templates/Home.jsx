// Components
import Banner from "../modules/Banner";
import Category from "../modules/Category";
import Products from "../layout/Products";
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
        
    </div>
  )
}

export default Home