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

export default function AccountMenu() {
  // UI Related
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/profile" component={RouterLink} underline="none" color="inherit" >
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/orders" component={RouterLink} underline="none" color="inherit" >
            Orders
          </Link>
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
