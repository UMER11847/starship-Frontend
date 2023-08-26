// Core
import { useState, useEffect, useCallback, useContext } from 'react'
import axios from 'axios'
// Components
import { Container, Typography, Box, Tab } from "@mui/material";
import FormCard from "../styles/FormCard";
import TabAccount from "../layout/Profile/TabAccount";
import { TabList, TabPanel, TabContext } from '@mui/lab'
import TabSecurity from '../layout/Profile/TabSecurity';
import TabAddresses from '../layout/Profile/TabAddresses';
// Contexts
import GlobalContext from '../../contexts/Global/Context';
// Styling
import { MdAccountCircle, MdLockOpen, MdMap } from 'react-icons/md'
import "../../scss/global.scss"


const Profile = () => {
  // UI Related
  const [value, setValue] = useState('account')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  // UI Related

  const [global, globalActions] = useContext(GlobalContext)
  const [addresses, setAddresses] = useState([])

  const getAddressesFromApi = useCallback(async function() {
    try {
      const res = await axios.get(global.api("/user/addresses"), {withCredentials: true})
      setAddresses(res.data.addresses)
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    getAddressesFromApi()
    if (!global.user.loggedIn) global.navigate("/login?next=/profile")
  }, [])

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
                  <Typography className='tab-name' >&nbsp;Account</Typography>
                </Box>
              }
            />
            <Tab
              value='security'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MdLockOpen style={{fontSize: "25px"}} />
                  <Typography className='tab-name' >&nbsp;Security</Typography>
                </Box>
              }
            />
            <Tab
              value='addresses'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MdMap style={{fontSize: "25px"}} />
                  <Typography className='tab-name' >&nbsp;Addresses</Typography>
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
            <TabAddresses addresses={addresses} setAddresses={setAddresses} />
          </TabPanel>
        </TabContext>


      </FormCard>
    </Container>
  );
};

export default Profile;
