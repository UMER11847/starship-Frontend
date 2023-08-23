// Components
import { Grid, TextField, CardContent, Button, Divider, Typography, Box } from "@mui/material";
// Styling
import BasicCard from "../../styles/BasicCard"
import TextRestrain from "../../styles/TextRestrain"

const TabAddresses = () => {
  return (
    <CardContent>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Address" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="City" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="State" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Country" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type="number" label="Zip Code" />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{ background: "#9676F4", marginRight: "20px" }}
            >
              Add Address
            </Button>
            <Button type="reset" variant="outlined" color="secondary">
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
      <Divider style={{margin: "20px"}} />
      <Grid container spacing={3}>
        {/* Item Example */}
        <Grid item xs={12} sm={6} md={4} >
          <BasicCard>
            <TextRestrain variant="body2">
              Address: house 2-t, street abc<br/>
              City: abc<br/>
              State: jnc<br/>
              Country:<br/>
              Zip Code: jinv<br/>
            </TextRestrain>
            <Divider style={{margin: "10px 0px"}} />
            <Box display="flex">
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px"}}
              >
                Update
              </Button>
              <Button type="reset" variant="outlined" color="secondary">
                Delete
              </Button>
            </Box>
          </BasicCard>
        </Grid>
        {/* Item Example */}
        <Grid item xs={12} sm={6} md={4} >
          <BasicCard>
            <TextRestrain variant="body2">
              Address: house 2-t, street abc<br/>
              City: abc<br/>
              State: jnc<br/>
              Country:<br/>
              Zip Code: jinv<br/>
            </TextRestrain>
            <Divider style={{margin: "10px 0px"}} />
            <Box display="flex">
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px"}}
              >
                Update
              </Button>
              <Button type="reset" variant="outlined" color="secondary">
                Delete
              </Button>
            </Box>
          </BasicCard>
        </Grid>
        {/* Item Example */}
        <Grid item xs={12} sm={6} md={4} >
          <BasicCard>
            <TextRestrain variant="body2">
              Address: house 2-t, street abc<br/>
              City: abc<br/>
              State: jnc<br/>
              Country:<br/>
              Zip Code: jinv<br/>
            </TextRestrain>
            <Divider style={{margin: "10px 0px"}} />
            <Box display="flex">
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px"}}
              >
                Update
              </Button>
              <Button type="reset" variant="outlined" color="secondary">
                Delete
              </Button>
            </Box>
          </BasicCard>
        </Grid>
        {/* Item Example */}
        <Grid item xs={12} sm={6} md={4} >
          <BasicCard>
            <TextRestrain variant="body2">
              Address: house 2-t, street abc<br/>
              City: abc<br/>
              State: jnc<br/>
              Country:<br/>
              Zip Code: jinv<br/>
            </TextRestrain>
            <Divider style={{margin: "10px 0px"}} />
            <Box display="flex">
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px"}}
              >
                Update
              </Button>
              <Button type="reset" variant="outlined" color="secondary">
                Delete
              </Button>
            </Box>
          </BasicCard>
        </Grid>
        {/* Item Example */}
        <Grid item xs={12} sm={6} md={4} >
          <BasicCard>
            <TextRestrain variant="body2">
              Address: house 2-t, street abc<br/>
              City: abc<br/>
              State: jnc<br/>
              Country:<br/>
              Zip Code: jinv<br/>
            </TextRestrain>
            <Divider style={{margin: "10px 0px"}} />
            <Box display="flex">
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px"}}
              >
                Update
              </Button>
              <Button type="reset" variant="outlined" color="secondary">
                Delete
              </Button>
            </Box>
          </BasicCard>
        </Grid>
        {/* Item Example */}
        <Grid item xs={12} sm={6} md={4} >
          <BasicCard>
            <TextRestrain variant="body2">
              Address: house 2-t, street abc<br/>
              City: abc<br/>
              State: jnc<br/>
              Country:<br/>
              Zip Code: jinv<br/>
            </TextRestrain>
            <Divider style={{margin: "10px 0px"}} />
            <Box display="flex">
              <Button
                variant="contained"
                style={{ background: "#9676F4", marginRight: "10px"}}
              >
                Update
              </Button>
              <Button type="reset" variant="outlined" color="secondary">
                Delete
              </Button>
            </Box>
          </BasicCard>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default TabAddresses;
