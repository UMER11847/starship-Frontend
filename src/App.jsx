// Core
import { Routes, Route } from "react-router-dom"
// Components
import Main from "./components/layout/Main"
import Home from "./components/templates/Home"
import Register from "./components/templates/Register"
// Styling
import './scss/App.scss'
import Login from "./components/templates/Login"
import SingleProduct from "./components/templates/SingleProduct"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} >
        <Route index element={<Home/>} />
      <Route path="product:id" element={<SingleProduct/>}/>
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  )
}

export default App