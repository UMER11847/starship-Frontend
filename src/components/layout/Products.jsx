// Components
import Product from "../modules/Product";
// Styling
import { Divider, Box, Pagination } from "@mui/material";
import "./scss/Products.scss";

import img1 from "../../assets/Category/Earbuds.jpg"
import img2 from "../../assets/Category/Headphones.jpg"
import img3 from "../../assets/Category/Laptop.jpg"
import img4 from "../../assets/Category/SmartWatch.jpg"
import img5 from "../../assets/Category/Speaker.jpg"
import img6 from "../../assets/Product/earbuds.jpeg"
import img7 from "../../assets/Product/laptop.png"
import img8 from "../../assets/Product/laptop2.jpg"

const Products = ({HeadingTxt}) => {
  return (
    <div className="products-container">
        <div className="sec-heading"><a id="style-2" data-replace={HeadingTxt}><span>{HeadingTxt}</span></a></div>
        <div className="products">
          <Product pic={img1} />
          <Product pic={img2} />
          <Product pic={img3} />
          <Product pic={img4} />
          <Product pic={img5} />
          <Product pic={img6} />
          <Product pic={img7} />
          <Product pic={img8} />

        </div>
        <Divider style={{margin: "20px"}} />
        <Box display="flex" justifyContent="center">
          <Pagination count={10} />
        </Box>
    </div>
  )
}

export default Products
