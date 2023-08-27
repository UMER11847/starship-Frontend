import "./scss/Search.scss";
import { MdClose } from "react-icons/md";
import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import GlobalContext from "../../contexts/Global/Context";
import axios from "axios"

const Search = ({ setShowSearch }) => {
  const [global, globalActions] = useContext(GlobalContext)
  const [searched, setSearched] = useState([]);
  const [searchText, setSearchText] = useState("")

  async function searchHandler(e) {
    if(e.code === "Enter") {
      document.activeElement.blur()

      try {
        const res = await axios.get(global.api("/products?keyword=") + searchText)
        setSearched(res.data.products)
      } catch (err) {
        console.log()
      }
    }
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <TextField onKeyDown={searchHandler} value={searchText} onChange={(e) => setSearchText(e.target.value.trim())} variant="standard" autoFocus placeholder="Search Products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">

          {searched.map((item) => {
            return (
              <div onClick={() => {global.navigate("/product/" + item._id); setShowSearch(false)}} key={item._id} className="search-result-item">
                <div className="image-container">
                  <img src={item.images[0].url} alt={item.images[0].public_id} />
                </div>
                <div className="prod-details">
                  <div className="name">{item.name}</div>
                  <div className="price">{item.price}$</div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  );
};

export default Search;
