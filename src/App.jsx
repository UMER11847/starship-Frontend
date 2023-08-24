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
import Profile from "./components/templates/Profile"
import About from "./components/modules/About"
import Admin from "./components/templates/Admin"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} >
        <Route index element={<Home/>} />
        <Route path="product/:id" element={<SingleProduct/>}/>
        <Route path="profile" element={<Profile/>} />
        <Route path="admin" element={<Admin/>} />
      </Route>
      <Route path="/password/reset" element={<BlankMain/>}>
        <Route index element={<ForgotPassword/>}/>
        <Route path=":token" element={<ResetPassword/>} />
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<Error404/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  )
}

export default App