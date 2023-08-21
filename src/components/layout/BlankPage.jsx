// Components
import { Container } from "@mui/material"
// Styling
import "./scss/BlankPage.scss"
// Assets
import mask from "../../assets/BlankPage/auth-v1-mask-light.png"
import plant1 from "../../assets/BlankPage/auth-v1-tree.png"
import plant2 from "../../assets/BlankPage/auth-v1-tree-2.png"

const BlankPage = ({ children }) => {
  return (
    <>
      <Container maxWidth="sm">
        {children}
      </Container>
      <img className="plant1" src={plant1} />
      <img className="plant2" src={plant2}/>
      <img className="mask" src={mask}/>
    </>
  )
}

export default BlankPage