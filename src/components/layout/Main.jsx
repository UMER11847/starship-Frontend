// Core
import { Outlet } from "react-router-dom"
// Components
import Header from "../modules/Header"
import Footer from "../modules/Footer"

const main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      
    </>
  )
}

export default main