// Core
import { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// Components
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
  Link
} from "@mui/material";
// Styling
import Logout from "@mui/icons-material/Logout";
import GlobalContext from "../../contexts/Global/Context";
import axios from "axios";
import DefaultAvatar from "../../assets/Profile/default-avatar-profile-icon-social-media-user-vector-image-400-242023490.jpg"

export default function AccountMenu() {
  // UI Related
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (!global.user.loggedIn) {
      global.navigate("/login?next=/profile")
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // UI Related

  const [global, globalActions] = useContext(GlobalContext)

  async function logoutHandler() {
    try {
      await axios.get(global.api("/user/logout"), {withCredentials:true})
      globalActions.resetUser()
      global.navigate("/login")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ mb: "5px" }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar src={global.user.loggedIn ? global.user.avatar.url : DefaultAvatar} sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => {global.navigate("/profile"); handleClose()}} >
            Profile
        </MenuItem>
        {global.user.role === "admin" && (
        <MenuItem onClick={() => {global.navigate("/admin"); handleClose()}} >
            Admin
        </MenuItem>
        )}
        <MenuItem onClick={() => {global.navigate("/orders"); handleClose()}} >
            Orders
        </MenuItem>
        <Divider />
        <MenuItem onClick={logoutHandler} >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
