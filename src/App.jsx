// Core
import { Routes, Route } from "react-router-dom"
import { useContext, useEffect } from "react"
import axios from "axios"
// Components
import Main from "./components/layout/Main"
import Home from "./components/templates/Home"
import Register from "./components/templates/Register"
import Error404 from "./components/templates/Error404"
import BlankMain from "./components/layout/BlankMain"
import ResetPassword from "./components/templates/ResetPassword"
import Login from "./components/templates/Login"
import SingleProduct from "./components/templates/SingleProduct"
import ForgotPassword from "./components/templates/ForgotPassword"
import Profile from "./components/templates/Profile"
import About from "./components/modules/About"
import Admin from "./components/templates/Admin"
import MyOrder from "./components/templates/MyOrder"
// Contexts
import StoreContext from "./contexts/Store/Context"
import CartContext from "./contexts/Cart/Context"
import GlobalContext from "./contexts/Global/Context"
// Styling
import './scss/App.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toaster from "./utils/toaster"


const App = () => {
  const [cart, cartActions] = useContext(CartContext)
  const [store, storeActions] = useContext(StoreContext)
  const [global, globalActions] = useContext(GlobalContext)

  useEffect(() => {
    (async function() {
      try {
        const res = await axios.get(global.api("/products"))
        storeActions.setProducts(res.data.products)
        for (const item of Object.values(cart)) {
          const resp = await axios.get(global.api("/products/") + item._id)
          const product = resp.data.product
          if(product.stock < item.amount) {
            console.log("shit")
            if (product.stock < 1) {
              cartActions.remove(item._id)
            } else {
              cartActions.add({id: item._id, item: {...product, amount: product.stock}})
            }
          }
        }
      } catch (err) {
        console.log(err)
        let msg
        if(err.response) {
          msg = err.response.data.message
        } else {
          msg = err.message
        }
        toaster("error", msg)
      }
    })()
  }, [])

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Main/>} >
          <Route index element={<Home/>} />
          <Route path="product/:id" element={<SingleProduct/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="admin" element={<Admin/>} />
          <Route path="/orders" element={<MyOrder/>} />
          <Route path="/about" element={<About/>} />
        </Route>
        <Route path="/password/reset" element={<BlankMain/>}>
          <Route index element={<ForgotPassword/>}/>
          <Route path=":token" element={<ResetPassword/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/404" element={<Error404/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </>
  )
}

export default App