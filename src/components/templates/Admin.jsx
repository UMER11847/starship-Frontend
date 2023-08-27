// Core
import { useContext, useEffect, useState } from 'react'
// Components
import { Container, Typography, Box, Tab } from "@mui/material";
import FormCard from "../styles/FormCard";
import TabOrders from "../layout/Admin/TabOrders";
import { TabList, TabPanel, TabContext } from '@mui/lab'
import TabProducts from '../layout/Admin/TabProducts';
// Styling
import { GoPackage } from 'react-icons/go'
import { BsCart2 } from 'react-icons/bs';
import GlobalContext from '../../contexts/Global/Context';


const Admin = () => {
  // UI Related
  const [value, setValue] = useState('products')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  // UI Related
  const [global, globalActions] = useContext(GlobalContext)

  useEffect(() => {
    if (global.user.role !== "admin") {
      global.navigate("/404")
    }
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
              value='products'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <BsCart2 style={{fontSize: "25px"}} />
                  <Typography>&nbsp;Products</Typography>
                </Box>
              }
            />
            <Tab
              value='orders'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                  <GoPackage style={{fontSize: "25px"}} />
                  <Typography>&nbsp;Orders</Typography>
                </Box>
              }
            />
          </TabList>

          <TabPanel sx={{ p: 0 }} value='products'>
            <TabProducts/>
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='orders'>
            <TabOrders />
          </TabPanel>
        </TabContext>


      </FormCard>
    </Container>
  );
};

export default Admin;