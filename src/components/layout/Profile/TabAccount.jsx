// Core
import { useState } from "react";
// Components
import {
  Grid,
  Select,
  MenuItem,
  TextField,
  Typography,
  InputLabel,
  CardContent,
  FormControl,
  Button,
} from "@mui/material";
// Assets
import defaultAvatar from "../../../assets/Profile/default-avatar-profile-icon-social-media-user-vector-image-400-242023490.jpg"



const TabAccount = () => {
  const [imgSrc, setImgSrc] = useState(defaultAvatar);

  const onChange = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };
  return (
    <CardContent>
        <form>
        <Grid container spacing={4}>
            <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3, paddingTop: "10px !important"}}>
                <Grid container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
                    <Grid item>
                    <img
                        src={imgSrc}
                        alt="Profile Pic"
                        style={{ width: "120px", height: "120px", borderRadius: "15px"}}
                    />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <Button
                        component="label"
                        variant="contained"
                        htmlFor="account-settings-upload-image"
                        style={{background: "#9676F4", margin: "20px 0px 0px 20px"}}
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
                        style={{margin: "20px 0px 0px 20px"}}
                        color="error"
                        variant="outlined"
                        onClick={() => setImgSrc(defaultAvatar)}
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
            <TextField
                fullWidth
                label="Name"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                type="email"
                label="Email"
               
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
                <InputLabel>Address</InputLabel>
                <Select label="Address" defaultValue="abc...">
                <MenuItem value="cde..">Admin</MenuItem>
                <MenuItem value="abc...">Editor</MenuItem>
                <MenuItem value="author">Author</MenuItem>
                </Select>
            </FormControl>
            </Grid>

            <Grid item xs={12}>
            <Button variant="contained" style={{background: "#9676F4", marginRight: "20px"}}>
                Save Changes
            </Button>
            <Button type="reset" variant="outlined" color="secondary">
                Reset
            </Button>
            </Grid>
        </Grid>
        </form>
    </CardContent>
  )
}

export default TabAccount