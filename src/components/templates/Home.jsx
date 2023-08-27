// Components
import Banner from "../modules/Banner";
import Category from "../modules/Category";
import Products from "../layout/Products";
import Newsletter from "../modules/NewsLetter";
// Styling
import "./scss/Home.scss"
import { useContext, useEffect, useState } from "react";
import StoreContext from "../../contexts/Store/Context";

const Home = () => {
  const [store, storeActions] = useContext(StoreContext)

  const [category, setCategory] = useState("")
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (!store.products || !store.products.length) return;
    if (category === "") {
      setProducts(store.products)
    } else {
      setProducts(store.products.filter((item) => category === item.category))
    }
  }, [category, store.products])

  return (
    <div>
      <Banner/>
      <div className="main-content">
        <div className="layout">
          <Category setCategory={setCategory} />
          <Products products={products} HeadingTxt="Products" />
        </div>
      </div>
      <Newsletter/>  
    </div>
  )
}

export default Home