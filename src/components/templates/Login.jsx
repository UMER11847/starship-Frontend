// Components
import { Checkbox, TextField, Typography, FormControlLabel, Button } from "@mui/material"
import BlankPage from "../layout/BlankPage"
import FormCard from "../layout/FormCard"
// Styling
import { FaRocket } from "react-icons/fa"

const Login = () => {
  return (
    <BlankPage>
        <FormCard>
            <div style={{textAlign: "center", margin: "20px"}}>
                <Typography variant="h4">
                    <FaRocket/> Starship
                </Typography>
            </div>
            <Typography style={{margin: "10px 0px"}} variant="h5">
                Please login
            </Typography>
            <TextField style={{width: "100%", margin: "10px 0px"}} label="Username" variant="outlined" />
            <TextField style={{width: "100%", margin: "10px 0px"}} label="Email" variant="outlined" />
            <FormControlLabel control={<Checkbox />} label="something" />
            <Button variant="contained" style={{width: "100%", background: "#9676F4", margin: "10px 0px", padding: "10px"}}>Login</Button>
        </FormCard>
    </BlankPage>
  )
}

export default Login