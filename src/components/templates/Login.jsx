// Core
import { Link as RouterLink } from "react-router-dom"
// Components
import { Checkbox, Typography, FormControlLabel, Link} from "@mui/material"
import BlankPage from "../layout/BlankPage"
import FormCard from "../styles/FormCard"
// Styling
import { GoRocket as Rocket } from "react-icons/go"
import ButtonRegin from "../styles/ButtonRegin.style"
import FormFieldMain from "../styles/FormFieldMain.style"
import "../../scss/global.scss"

const Login = () => {
  return (
    <BlankPage>
        <FormCard style={{maxWidth: "450px"}} >
            <header style={{textAlign: "center", margin: "20px"}}>
                <Typography variant="h4">
                    <Rocket style={{position: "relative", top: "5px"}} /> Starship
                </Typography>
            </header>
            <main>
                <Typography style={{margin: "10px 0px"}} variant="h5">
                    Welcome to Starship
                </Typography>
                <FormFieldMain label="Email" type="email" variant="outlined" />
                <FormFieldMain type="password" label="Password" variant="outlined" />
                <div className="flex-middle" >
                    <FormControlLabel control={<Checkbox />} label="Remember Me" />
                    <Typography>
                        <Link style={{position: "relative", top: "6px"}} className="link-underline-animation" to="/password/reset" component={RouterLink} underline="none">
                            Forgot Password?
                        </Link>
                    </Typography>
                </div>
                <ButtonRegin variant="contained">Login</ButtonRegin>
            </main>
            <footer className="text-center" style={{margin: "10px"}}>
                <Typography>
                    New on our platform? <Link style={{position: "relative", top: "6px"}} className="link-underline-animation" to="/register" component={RouterLink} underline="none">Create an account</Link>
                </Typography>
            </footer>
        </FormCard>
    </BlankPage>
  )
}

export default Login