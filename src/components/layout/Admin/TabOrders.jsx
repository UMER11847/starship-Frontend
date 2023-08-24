// Components
import {
  Grid,
  TextField,
  CardContent,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";



const TabOrders = () => {
  return (
    <CardContent>
        <form>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                label="Id"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel>Status</InputLabel>
                    <Select label="Status" defaultValue="processing" >
                        <MenuItem value="processing" >Processing</MenuItem>
                        <MenuItem value="onDelivery" >On Delivery</MenuItem>
                        <MenuItem value="delivered" >Delivered</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12}>
            <Button variant="contained" style={{background: "#9676F4", marginRight: "20px"}}>
                Update Status
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

export default TabOrders