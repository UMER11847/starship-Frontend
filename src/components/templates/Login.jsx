// Core
import { Link as RouterLink } from "react-router-dom"
// Components
import { Checkbox, Typography, FormControlLabel, Link} from "@mui/material"
import BlankPage from "../layout/BlankPage"
import FormCard from "../layout/FormCard"
// Styling
import { FaRocket } from "react-icons/fa"
import ButtonRegin from "../styles/ButtonRegin.style"
import FormFieldMain from "../styles/FormFieldMain.style"
import "../../scss/global.scss"

const Login = () => {
  return (
    <BlankPage>
        <FormCard style={{maxWidth: "450px"}} >
            <div style={{textAlign: "center", margin: "20px"}}>
                <Typography variant="h4">
                    <FaRocket/> Starship
                </Typography>
            </div>
            <Typography style={{margin: "10px 0px"}} variant="h5">
                Welcome to Starship
            </Typography>
            <FormFieldMain label="Email" variant="outlined" />
            <FormFieldMain type="password" label="Password" variant="outlined" />
            <div className="flex-middle" >
                <FormControlLabel control={<Checkbox />} label="Remember Me" />
                <Typography>
                    <Link style={{position: "relative", top: "6px"}} className="link-underline-animation" to="/" component={RouterLink} underline="none">
                        Forgot Password?
                    </Link>
                </Typography>
            </div>
            <ButtonRegin variant="contained">Login</ButtonRegin>
            <div className="text-center" style={{margin: "10px"}}>
                <Typography>
                    New on our platform? <Link style={{position: "relative", top: "6px"}} className="link-underline-animation" to="/register" component={RouterLink} underline="none">Create an account</Link>
                </Typography>
            </div>
        </FormCard>
    </BlankPage>
  )
}

export default Login