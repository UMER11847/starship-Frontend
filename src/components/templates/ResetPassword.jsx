// Components
import FormCard from "../styles/FormCard"
import { Typography } from "@mui/material"
import FormFieldMain from "../styles/FormFieldMain.style"
// Styling
import ButtonRegin from "../styles/ButtonRegin.style"
import { FaRocket } from "react-icons/fa"

const ResetPassword = () => {
  return (
    <FormCard style={{maxWidth: "450px"}} >
        <header style={{textAlign: "center", margin: "20px"}}>
            <Typography variant="h4">
                <FaRocket/> Starship
            </Typography>
        </header>
        <main>
            <Typography style={{margin: "10px 0px"}} variant="h5">
                Reset your password
            </Typography>
            <FormFieldMain label="Password" type="password" variant="outlined" />
            <Typography variant="caption">
                Password Requirements:<br/>
                &emsp;&bull; Must be greater than 8 characters<br/>
                &emsp;&bull; Must include atleast 1 uppercase letter<br/>
                &emsp;&bull; Must include atleast 1 lowercase letter<br/>
                &emsp;&bull; Must include atleast 1 special character<br/>
            </Typography>
            <FormFieldMain label="Confirm Password" type="password" variant="outlined" />
            <ButtonRegin variant="contained" >Reset Password</ButtonRegin>
        </main>
    </FormCard>
  )
}

export default ResetPassword