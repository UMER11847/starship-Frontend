// Components
import { Typography } from "@mui/material"
import BlankPage from "../layout/BlankPage"
// Styling
import { GoAlert } from "react-icons/go"

const error404 = () => {
  return (
    <BlankPage>
      <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Typography variant="h1">
          404</Typography>
        <Typography variant="h5">
          Page Not Found <GoAlert/>
        </Typography>
        <Typography>
          We couldn′t find the page you are looking for.
        </Typography>
      </div>
    </BlankPage>
  )
}

export default error404