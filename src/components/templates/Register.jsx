// Core
import { Link as RouterLink } from "react-router-dom"
// Components
import { Checkbox, Typography, FormControlLabel, Link } from "@mui/material"
import BlankPage from "../layout/BlankPage"
import FormCard from "../layout/FormCard"
// Styling
import { FaRocket } from "react-icons/fa"
import ButtonRegin from "../styles/ButtonRegin.style"
import FormFieldMain from "../styles/FormFieldMain.style"
import "../../scss/global.scss"

const Register = () => {
  return (
    <BlankPage>
        <FormCard style={{maxWidth: "450px"}} >
            <div style={{textAlign: "center", margin: "20px"}}>
                <Typography variant="h4">
                    <FaRocket/> Starship
                </Typography>
            </div>
            <Typography style={{margin: "10px 0px"}} variant="h5">
                Adventure starts here
            </Typography>
            <FormFieldMain label="Username" variant="outlined" />
            <FormFieldMain label="Email" variant="outlined" />
            <FormFieldMain label="Password" type="password" variant="outlined" />
            <FormFieldMain label="Confirm Password" type="password" variant="outlined" />
            <FormControlLabel control={<Checkbox />} label="I agree to privacy policy & terms" />
            <ButtonRegin variant="contained">Sign Up</ButtonRegin>
            <div className="text-center" style={{margin: "10px"}}>
                <Typography>
                    Already have an account? <Link to="/login" component={RouterLink} style={{position: "relative", top: "6px"}} className="link-underline-animation" underline="none">Sign in instead</Link>
                </Typography>
            </div>
        </FormCard>
    </BlankPage>
  )
}

export default Register