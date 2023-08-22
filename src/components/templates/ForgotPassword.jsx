// Components
import FormCard from "../layout/FormCard"
import { Typography } from "@mui/material"
import FormFieldMain from "../styles/FormFieldMain.style"
// Styling
import ButtonRegin from "../styles/ButtonRegin.style"
import { FaRocket } from "react-icons/fa"

const ForgotPassword = () => {
  return (
    <FormCard style={{maxWidth: "450px"}} >
        <header style={{textAlign: "center", margin: "20px"}}>
            <Typography variant="h4">
                <FaRocket/> Starship
            </Typography>
        </header>
        <main>
            <Typography style={{margin: "10px 0px"}} variant="h5">
                Forgot your password?
            </Typography>
            <FormFieldMain label="Email" variant="outlined" />
            <Typography>
                Enter your email to reset password
            </Typography>
            <ButtonRegin variant="contained" >Send Email</ButtonRegin>
        </main>
    </FormCard>
  )
}

export default ForgotPassword