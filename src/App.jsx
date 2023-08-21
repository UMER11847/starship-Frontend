// Core
import { Routes, Route } from "react-router-dom"
// Components
import Main from "./components/layout/Main"
import Home from "./components/templates/Home"
// Styling
import './scss/App.scss'
import Login from "./components/templates/Login"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} >
        <Route index element={<Home/>} />
        <Route path="product:id" />
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" />
    </Routes>
  )
}

export default App