// Components
import FormCard from "../styles/FormCard";
import { Typography } from "@mui/material";
import FormFieldMain from "../styles/FormFieldMain.style";
// Styling
import ButtonRegin from "../styles/ButtonRegin.style";
import { GoRocket as Rocket } from "react-icons/go";
import { useContext, useState } from "react";
import GlobalContext from "../../contexts/Global/Context";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [global, globalActions] = useContext(GlobalContext)

  const { token } = useParams()

  const [disableSubmit, setDisableSubmit] = useState(false)
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  function formHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function submitHandler() {
    setDisableSubmit(true)
    try {
      await axios.put(global.api("/user/password/reset/") + token, {
        password: formData.password,
        confirmPassword: formData.confirmPassword
      })
      global.navigate("/login")
    } catch (err) {
      console.log(err)
      toast.error("Reset password token is invalid or has been expired", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
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
          Reset your password
        </Typography>
        <FormFieldMain
          name="password"
          value={formData.password}
          onChange={formHandler}
          label="Password"
          type="password"
          variant="outlined"
        />
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
          label="Confirm Password"
          type="password"
          variant="outlined"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={formHandler}
        />
        <ButtonRegin onClick={submitHandler} disabled={disableSubmit} variant="contained">Reset Password</ButtonRegin>
      </main>
    </FormCard>
  );
};

export default ResetPassword;
