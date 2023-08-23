// Core
import { useState } from 'react'
// Components
import { Container, Typography, Box, Tab } from "@mui/material";
import FormCard from "../styles/FormCard";
import TabAccount from "../layout/Profile/TabAccount";
import { TabList, TabPanel, TabContext } from '@mui/lab'
import TabSecurity from '../layout/Profile/TabSecurity';
// Styling
import { MdAccountCircle, MdLockOpen, MdMap } from 'react-icons/md'
import TabAddresses from '../layout/Profile/TabAddresses';


const Profile = () => {
  // ** State
  const [value, setValue] = useState('account')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container>
      <FormCard style={{ maxWidth: "900px", borderRadius: "10px" }} variant='outlined'>
      
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label='account-settings tabs'
            sx={{ borderBottom: "1px solid" }}
          >
            <Tab
              value='account'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                  <MdAccountCircle style={{fontSize: "25px"}} />
                  <Typography>&nbsp;Account</Typography>
                </Box>
              }
            />
            <Tab
              value='security'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MdLockOpen style={{fontSize: "25px"}} />
                  <Typography>&nbsp;Security</Typography>
                </Box>
              }
            />
            <Tab
              value='addresses'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MdMap style={{fontSize: "25px"}} />
                  <Typography>&nbsp;Addresses</Typography>
                </Box>
              }
            />
          </TabList>

          <TabPanel sx={{ p: 0 }} value='account'>
            <TabAccount />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='security'>
            <TabSecurity/>
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='addresses'>
            <TabAddresses/>
          </TabPanel>
        </TabContext>


      </FormCard>
    </Container>
  );
};

export default Profile;
