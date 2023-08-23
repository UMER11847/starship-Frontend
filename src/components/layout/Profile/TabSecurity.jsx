// Components
import {
  Grid,
  TextField,
  CardContent,
  Button,
  Typography
} from "@mui/material";



const TabSecurity = () => {
  return (
    <CardContent>
        <form>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                label="New Password"
                type="password"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                type="password"
                label="Confirm New Password"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>
                    Password Requirements:<br/>
                    &emsp;&bull; Must be greater than 8 characters<br/>
                    &emsp;&bull; Must include atleast 1 uppercase letter<br/>
                    &emsp;&bull; Must include atleast 1 lowercase letter<br/>
                    &emsp;&bull; Must include atleast 1 special character<br/>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                type="password"
                label="Old Password"
            />
            </Grid>

            <Grid item xs={12}>
            <Button variant="contained" style={{background: "#9676F4", marginRight: "20px"}}>
                Update Password
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

export default TabSecurity