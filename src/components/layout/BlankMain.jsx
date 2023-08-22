// Core
import { Outlet } from "react-router-dom";
// Components
import BlankPage from "./BlankPage";

const BlankMain = () => {
  return (
    <BlankPage>
      <Outlet/>
    </BlankPage>
  )
}

export default BlankMain