// Core
import { Routes, Route } from "react-router-dom"
// Components
import Main from "./components/layout/Main"
import Home from "./components/templates/Home"
// Styling
import './scss/App.scss'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} >
        <Route index element={<Home/>} />
      </Route>
    </Routes>
  )
}

export default App