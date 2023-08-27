import { useEffect, useState } from "react";
// Components
import Product from "../modules/Product";
// Styling
import { Divider, Box, Pagination } from "@mui/material";
import "./scss/Products.scss";

const Products = ({ products, HeadingTxt}) => {
  const [showItems, setShowItems] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [page, setPage] = useState(1)

  useEffect(() => {
    try {
      setShowItems(products.slice((page * 4) - 4, page * 4))
      setPageCount(Math.ceil(products.length / 4))
    } catch (err) {null}
  }, [products, page])

  return (
    <div className="products-container">
        <div className="sec-heading"><a id="style-2" data-replace={HeadingTxt}><span>{HeadingTxt}</span></a></div>
        <div className="products">
          {showItems.map((item) => {
            return <Product key={item._id} item={item} />
          })}

        </div>
        <Divider style={{margin: "20px"}} />
        <Box display="flex" justifyContent="center">
          <Pagination page={page} onChange={(e, v) => setPage(v)} count={pageCount} />
        </Box>
    </div>
  )
}

export default Products
