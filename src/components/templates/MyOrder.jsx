import { useCallback, useContext, useEffect, useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Divider,
} from "@mui/material";
import BlankPage from "../layout/BlankPage";
import TextRestrain from "../styles/TextRestrain";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import axios from "axios";
import GlobalContext from "../../contexts/Global/Context";
import BasicCard from "../styles/BasicCard";



function Row({ order, admin }) { 
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardArrowUp sx={{ color: "#8E2DE2" }} />
            ) : (
              <KeyboardArrowDown sx={{ color: "#8E2DE2" }} />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {order._id}
        </TableCell>
        <TableCell align="right">{order.orderStatus}</TableCell>
        <TableCell align="right">{new Date(order.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', })}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {admin ? (
                  <span>
                    Name: {order.user.name}<br/>
                    Email: {order.user.email}<br/>
                  </span>
                ) : "" }
                Address : {order.address.address} <br />
                City: {order.address.city} <br />
                State: {order.address.state} <br />
                Country: {order.address.country} <br />
                Zip Code: {order.address.zipCode}
              </Typography>
              <Divider variant="middle" />

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Sum ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.orderItems.map((item) => (
                    <TableRow key={item.product}>
                      <TableCell component="th" scope="row">
                        <TextRestrain maxWidth="200px">
                        {item.name}
                        </TextRestrain>
                      </TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell align="right">{item.price}$</TableCell>
                      <TableCell align="right">
                        {item.quantity * item.price}$
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}>Subtotal:</TableCell>
                    <TableCell align="right">{order.subtotal}$</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Shipping:</TableCell>
                    <TableCell align="right">{order.shippingPrice}$</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Total:</TableCell>
                    <TableCell align="right">{order.totalPrice}$</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function MyOrder() {
  const [global, globalActions] = useContext(GlobalContext)

  const [orders, setOrders] = useState([])

  const getOrdersFromApi = useCallback(async function() {
    try {
      const res = await axios.get(global.api(global.user.role === "admin" ? "/orders" : "/user/orders"), {withCredentials: true})
      setOrders(res.data.orders.reverse())
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    getOrdersFromApi()
    if (!global.user.loggedIn) global.navigate("/login?next=/orders")
  }, [])

  return (
    <BlankPage>
      <BasicCard  sx={{ margin: "40px auto" }}>
          <TableContainer
            className="table-style"
            style={{
              padding: "10px 0px",
              overflowX: "hidden"
            }}
          >
            <Typography variant="h3" gutterBottom color={"#8E2DE2"}>
              My Orders{" "}
            </Typography>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell
                    className="header-cell-style"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Order id
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell
                    align="right"
                    className="header-cell-style"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <Row key={order._id} order={order} admin={global.user.role === "admin"} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </BasicCard>
    </BlankPage>
  );
}
