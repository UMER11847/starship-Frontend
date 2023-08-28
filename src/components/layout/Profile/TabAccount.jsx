// Core
import { useContext, useEffect, useState } from "react";
import axios from "axios";
// Components
import {
  Grid,
  TextField,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
// Contexts
import GlobalContext from "../../../contexts/Global/Context"
// Assets
import defaultAvatar from "../../../assets/Profile/default-avatar-profile-icon-social-media-user-vector-image-400-242023490.jpg";
import toaster from "../../../utils/toaster";


const TabAccount = () => {
  const [global, globalActions] = useContext(GlobalContext)

  const [avatar, setAvatar] = useState("")
  
  // UI Related
  const [imgSrc, setImgSrc] = useState(global.user.avatar && global.user.avatar.url);

  const onChange = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
      setAvatar(files[0])
    }
  };
  // UI Related


  const emptyForm = {
    name: global.user.name,
    email: global.user.email,
  }

  const [disableSave, setDisableSave] = useState(false)
  const [formData, setFormData] = useState(emptyForm)


  function formHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function imageResetHandler(){
    setImgSrc(defaultAvatar)
    setAvatar("")
  }

  async function submitHandler() {
    setDisableSave(true)
    const form = new FormData()
    form.append("name", formData.name)
    form.append("email", formData.email)

    if(avatar !== "") {
      form.append("avatar", avatar)
    }

    try {
      const res = await axios.put(global.api("/user"), form, {withCredentials:true})
      globalActions.updateUser(res.data.user)
      localStorage.setItem("email", formData.email)
      toaster("success", "Profile updated successfully")
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
    setDisableSave(false)
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sx={{
              marginTop: 4.8,
              marginBottom: 3,
              paddingTop: "10px !important",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item>
                <img
                  src={imgSrc}
                  alt="Profile Pic"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "15px",
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  component="label"
                  variant="contained"
                  htmlFor="account-settings-upload-image"
                  style={{ background: "#9676F4", margin: "20px 0px 0px 20px" }}
                >
                  Upload New Photo
                  <input
                    hidden
                    type="file"
                    onChange={onChange}
                    accept="image/png, image/jpeg"
                    id="account-settings-upload-image"
                  />
                </Button>
                <Button
                  style={{ margin: "20px 0px 0px 20px" }}
                  color="error"
                  variant="outlined"
                  onClick={imageResetHandler}
                >
                  Reset
                </Button>
                <Typography variant="body2" sx={{ margin: "20px" }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField name="name" onChange={formHandler} value={formData.name} fullWidth label="Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="email" onChange={formHandler} value={formData.email} fullWidth type="email" label="Email" />
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
              disabled={disableSave}
            >
              Save Changes
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

export default TabAccount;
