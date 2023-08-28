// Core
import { useContext, useState } from "react";
import axios from "axios";
// Components
import {
  Grid,
  TextField,
  CardContent,
  Button,
  Divider,
  Box,
} from "@mui/material";
// Contexts
import GlobalContext from "../../../contexts/Global/Context";
// Styling
import BasicCard from "../../styles/BasicCard";
import TextRestrain from "../../styles/TextRestrain";
import toaster from "../../../utils/toaster";

const TabAddresses = ({ addresses, setAddresses }) => {
  const [global, globalActions] = useContext(GlobalContext);

  const emptyForm = {
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  };
  const [disableAdd, setDisableAdd] = useState(false);
  const [disableDelete, setDisableDelete] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  async function addAddr() {
    setDisableAdd(true);
    try {
      const res = await axios.post(
        global.api("/user/addresses"),
        {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          zipCode: formData.zipCode,
        },
        { withCredentials: true }
      );

      setFormData(emptyForm);
      setAddresses([...addresses, res.data.address]);
    } catch (err) {
      console.log(err);
    }
    setDisableAdd(false);
  }

  async function updateAddr() {
    setDisableAdd(true);
    try {
      const res = await axios.put(
        global.api("/user/addresses/") + formData.id,
        {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          zipCode: formData.zipCode,
        },
        { withCredentials: true }
      );
      setFormData(emptyForm);
      setAddresses(
        addresses.map((addr) => {
          if (addr._id === formData.id) {
            return res.data.address;
          }
          return addr;
        })
      );
      toaster("success", "Success")
    } catch (err) {
      console.log(err);
      let msg
      if(err.response) {
        msg = err.response.data.message
      } else {
        msg = err.message
      }
      toaster("error", msg)
    }
    setDisableAdd(false);
  }

  function formHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function requestHandler() {
    if (formData.id) {
      await updateAddr();
    } else {
      await addAddr();
    }
  }

  async function updateAddrHandler(address) {
    setFormData({
      id: address._id,
      address: address.address,
      city: address.city,
      state: address.state,
      country: address.country,
      zipCode: address.zipCode,
    });
  }

  async function deleteAddrHandler(id) {
    setDisableDelete(true);
    try {
      await axios.delete(global.api("/user/addresses/") + id, {
        withCredentials: true,
      });
      setAddresses(addresses.filter((addr) => addr._id !== id));
      toaster("success", "Deleted Address Successfully")
    } catch (err) {
      console.log(err);
      let msg
      if(err.response) {
        msg = err.response.data.message
      } else {
        msg = err.message
      }
      toaster("error", msg)
    }
    setDisableDelete(false);
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="address"
              fullWidth
              label="Address"
              value={formData.address}
              onChange={formHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="city"
              fullWidth
              label="City"
              value={formData.city}
              onChange={formHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="state"
              fullWidth
              label="State"
              value={formData.state}
              onChange={formHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="country"
              fullWidth
              label="Country"
              value={formData.country}
              onChange={formHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="zipCode"
              fullWidth
              type="number"
              label="Zip Code"
              value={formData.zipCode}
              onChange={formHandler}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                background: "#9676F4",
                marginRight: "20px",
                "&:hover": {
                  background: "#7e67c2"
                }
              }}
              onClick={requestHandler}
              disabled={disableAdd}
            >
              {formData.id ? "Update Address" : "Add Address"}
            </Button>
            <Button
              type="reset"
              variant="outlined"
              color="secondary"
              onClick={() => setFormData(emptyForm)}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
      <Divider style={{ margin: "20px" }} />
      <Grid container spacing={3}>
        {addresses.map((address) => (
          <Grid key={address._id} item xs={12} sm={6} md={4}>
            <BasicCard>
              <TextRestrain variant="body2">
                Address: {address.address}
                <br />
                City: {address.city}
                <br />
                State: {address.state}
                <br />
                Country: {address.country}
                <br />
                Zip Code: {address.zipCode}
                <br />
              </TextRestrain>
              <Divider style={{ margin: "10px 0px" }} />
              <Box display="flex">
                <Button
                  variant="contained"
                  style={{ background: "#9676F4", marginRight: "10px" }}
                  onClick={() => updateAddrHandler(address)}
                >
                  Update
                </Button>
                <Button
                  disabled={disableDelete || formData.id === address._id}
                  onClick={() => deleteAddrHandler(address._id)}
                  type="reset"
                  variant="outlined"
                  color="secondary"
                >
                  Delete
                </Button>
              </Box>
            </BasicCard>
          </Grid>
        ))}
      </Grid>
    </CardContent>
  );
};

export default TabAddresses;
