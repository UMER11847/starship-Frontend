// Components
import FormCard from "../styles/FormCard"
import { Typography } from "@mui/material"
import FormFieldMain from "../styles/FormFieldMain.style"
// Styling
import ButtonRegin from "../styles/ButtonRegin.style"
import { GoRocket as Rocket } from "react-icons/go"

const ForgotPassword = () => {
  return (
    <FormCard style={{maxWidth: "450px"}} >
        <header style={{textAlign: "center", margin: "20px"}}>
            <Typography variant="h4">
                <Rocket style={{position: "relative", top: "5px"}} /> Starship
            </Typography>
        </header>
        <main>
            <Typography style={{margin: "10px 0px"}} variant="h5">
                Forgot your password?
            </Typography>
            <FormFieldMain label="Email" variant="outlined" />
            <Typography variant="caption">
                Enter your email to reset password
            </Typography>
            <ButtonRegin variant="contained" >Send Email</ButtonRegin>
        </main>
    </FormCard>
  )
}

export default ForgotPassword