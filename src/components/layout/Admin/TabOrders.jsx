// Components
import {
  Grid,
  TextField,
  CardContent,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import GlobalContext from "../../../contexts/Global/Context";

const TabOrders = () => {
  const [global, globalActions] = useContext(GlobalContext);
  const [disableUpdate, setDisableUpdate] = useState(false)

  async function submitHandler(e) {
    e.preventDefault();
    const form = new FormData(e.target);

    setDisableUpdate(true)
    try {
      await axios.put(
        global.api("/orders/") + form.get("id"),
        { orderStatus: form.get("status") },
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
    }
    setDisableUpdate(false)
  }

  return (
    <CardContent>
      <form onSubmit={submitHandler}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField name="id" fullWidth label="Id" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select name="status" label="Status" defaultValue="Processing">
                <MenuItem value="Processing">Processing</MenuItem>
                <MenuItem value="On Delivery">On Delivery</MenuItem>
                <MenuItem value="Delivered">Delivered</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                background: "#9676F4",
                marginRight: "20px",
                "&:hover": {
                  background: "#9676F4"
                }
              }}
              type="submit"
              disabled={disableUpdate}
            >
              Update Status
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default TabOrders;
