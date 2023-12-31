// Core
import axios from "axios"
import { useState, useContext, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import GlobalContext from "../../contexts/Global/Context";
// Components
import { Checkbox, Typography, FormControlLabel, Link } from "@mui/material";
import BlankPage from "../layout/BlankPage";
import FormCard from "../styles/FormCard";
import toaster from "../../utils/toaster";
// Styling
import { GoRocket as Rocket } from "react-icons/go";
import ButtonRegin from "../styles/ButtonRegin.style";
import FormFieldMain from "../styles/FormFieldMain.style";
import "../../scss/global.scss";

const Register = () => {
  const [global, globalActions] = useContext(GlobalContext)

  const [disableRegister, setDisableRegister] = useState(false)
  const [policyAgreed, setPolicyAgreed] = useState(false);

  useEffect(() => {
    if(global.user.loggedIn) global.navigate("/")
  }, [])

  async function submitHandler(e) {
    e.preventDefault()
    const formData = new FormData(e.target)

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    }

    try {
      setDisableRegister(true)
      const res = await axios.post(global.api("/user/register"), payload, {withCredentials:true})
      globalActions.updateUser(res.data.user)
      global.navigate("/")
      toaster("success", "Registered account successfully")
    } catch (err) {
      setDisableRegister(false)
      console.log(err)

      let msg
      if(err.response) {
        msg = err.response.data.message
      } else {
        msg = err.message
      }
      toaster("error", msg)
    }
  }

  return (
    <BlankPage>
      <FormCard style={{ maxWidth: "450px" }}>
        <header style={{ textAlign: "center", margin: "20px" }}>
          <Typography variant="h4">
            <Rocket style={{ position: "relative", top: "5px" }} /> Starship
          </Typography>
        </header>
        <main>
          <form onSubmit={submitHandler}>
            <Typography style={{ margin: "10px 0px" }} variant="h5">
              Adventure starts here
            </Typography>
            <FormFieldMain name="name" label="Name" variant="outlined" />
            <FormFieldMain name="email" label="Email" type="email" variant="outlined" />
            <FormFieldMain name="password" label="Password" type="password" variant="outlined" />
            <Typography variant="caption">
              Password Requirements:
              <br />
              &emsp;&bull; Must be greater than 8 characters
              <br />
              &emsp;&bull; Must include atleast 1 uppercase letter
              <br />
              &emsp;&bull; Must include atleast 1 lowercase letter
              <br />
              &emsp;&bull; Must include atleast 1 special character
              <br />
            </Typography>
            <FormFieldMain
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              variant="outlined"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={policyAgreed}
                  onClick={() => setPolicyAgreed(!policyAgreed)}
                />
              }
              label="I agree to privacy policy & terms"
            />
            <ButtonRegin type="submit" variant="contained" disabled={!policyAgreed || disableRegister}>Sign Up</ButtonRegin>
          </form>
        </main>
        <footer className="text-center" style={{ margin: "10px" }}>
          <Typography>
            Already have an account?{" "}
            <Link
              to="/login"
              component={RouterLink}
              style={{ position: "relative", top: "6px" }}
              className="link-underline-animation"
              underline="none"
            >
              Sign in instead
            </Link>
          </Typography>
        </footer>
      </FormCard>
    </BlankPage>
  );
};

export default Register;
