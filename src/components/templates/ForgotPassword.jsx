// Components
import FormCard from "../styles/FormCard";
import { Typography } from "@mui/material";
import FormFieldMain from "../styles/FormFieldMain.style";
// Styling
import ButtonRegin from "../styles/ButtonRegin.style";
import { GoRocket as Rocket } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../contexts/Global/Context";
import axios from "axios";

const ForgotPassword = () => {
  const [global, globalActions] = useContext(GlobalContext)

  const [email, setEmail] = useState("")
  const [disableSubmit, setDisableSubmit] = useState(false)

  useEffect(() => {
    if(global.user.loggedIn) global.navigate("/")
  }, [])

  async function submitHandler() {
    setDisableSubmit(true)
    try {
      const payload = {
        email,
        redirectURL: import.meta.env.VITE_FRONTEND_URL + '/password/reset/'
      }
      await axios.put(global.api("/user/password/reset"), payload)
      global.navigate("/login")
    } catch (err) {
      console.log(err)
    }
    setDisableSubmit(false)
  }

  return (
    <FormCard style={{ maxWidth: "450px" }}>
      <header style={{ textAlign: "center", margin: "20px" }}>
        <Typography variant="h4">
          <Rocket style={{ position: "relative", top: "5px" }} /> Starship
        </Typography>
      </header>
      <main>
        <Typography style={{ margin: "10px 0px" }} variant="h5">
          Forgot your password?
        </Typography>
        <FormFieldMain value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
        <Typography variant="caption">
          Enter your email to reset password
        </Typography>
        <ButtonRegin disabled={disableSubmit} onClick={submitHandler} variant="contained">Send Email</ButtonRegin>
      </main>
    </FormCard>
  );
};

export default ForgotPassword;
