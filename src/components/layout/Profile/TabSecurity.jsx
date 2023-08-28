// Core
import { useContext, useState } from "react";
import axios from "axios";
// Components
import {
  Grid,
  TextField,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
// Contexts
import GlobalContext from "../../../contexts/Global/Context";
import toaster from "../../../utils/toaster";

const TabSecurity = () => {
  const [global, globalActions] = useContext(GlobalContext)

  const emptyForm = {
    password: "",
    newPassword: "",
    confirmNewPassword: ""
  }

  const [disableSubmut, setDisableSubmit] = useState(false)
  const [formData, setFormData] = useState(emptyForm)

  function formHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function submitHandler() {
    setDisableSubmit(true)
    try {
      await axios.put(global.api("/user/password/update"), {
        password: formData.password,
        newPassword: formData.newPassword,
        confirmNewPassword: formData.confirmNewPassword
      }, {withCredentials:true})
      setFormData(emptyForm)
      localStorage.setItem("password", formData.newPassword)
      toaster("success", "Password Updated Successfully")
    } catch (err) {
      console.log(err)
      let msg
      if(err.response) {
        msg = err.response.data.message
      } else {
        msg = err.message
      }
      toaster("error", msg)
    }
    setDisableSubmit(false)
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField name="newPassword" value={formData.newPassword} onChange={formHandler} fullWidth label="New Password" type="password" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="confirmNewPassword" value={formData.confirmNewPassword} onChange={formHandler} fullWidth type="password" label="Confirm New Password" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="password" value={formData.password} onChange={formHandler} fullWidth type="password" label="Old Password" />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                background: "#9676F4",
                marginRight: "20px",
                "&:hover": {
                  background: "#9676F4",
                }
              }}
              onClick={submitHandler}
              disabled={disableSubmut}
            >
              Update Password
            </Button>
            <Button onClick={() => setFormData(emptyForm)} type="reset" variant="outlined" color="secondary">
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default TabSecurity;
