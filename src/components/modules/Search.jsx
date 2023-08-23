import "./scss/Search.scss";
import ProdImg from "../../assets/Product/earbuds.jpeg"
import { MdClose } from "react-icons/md";
const Search = ({setShowSearch}) => {
  return (
    <div className="search-modal">
        <div className="form-field">
            <input type="text"
            autoFocus
            placeholder="Search Products"
            />
            <MdClose onClick={() => setShowSearch(false)} />
        </div>
      <div className="search-result-content">
        <div className="search-results">
            <div className="search-result-item">
                <div className="image-container">
                    <img src={ProdImg} alt="" />
                </div>
                <div className="prod-details">
                    <div className="name">Product name</div>
                    <div className="desc">Products desc</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search
