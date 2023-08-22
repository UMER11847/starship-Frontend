// Core
import { Routes, Route } from "react-router-dom"
// Components
import Main from "./components/layout/Main"
import Home from "./components/templates/Home"
import Register from "./components/templates/Register"
import Error404 from "./components/templates/Error404"
import BlankMain from "./components/layout/BlankMain"
import ResetPassword from "./components/templates/ResetPassword"
// Styling
import './scss/App.scss'
import Login from "./components/templates/Login"
import SingleProduct from "./components/templates/SingleProduct"
import ForgotPassword from "./components/templates/ForgotPassword"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} >
        <Route index element={<Home/>} />
        <Route path="product:id" element={<SingleProduct/>}/>
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/password/reset" element={<BlankMain/>}>
        <Route index element={<ForgotPassword/>}/>
        <Route path=":token" element={<ResetPassword/>} />
      </Route>
      <Route path="*" element={<Error404/>} />
    </Routes>
  )
}

export default App