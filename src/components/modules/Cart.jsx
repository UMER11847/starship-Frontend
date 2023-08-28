import "./scss/Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItems from "./CartItems";
import { List, Modal, Box, Button, Dialog, DialogTitle, DialogContent, FormControl, InputLabel, Select, MenuItem, OutlinedInput, DialogActions, Typography } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/Cart/Context";
import GlobalContext from "../../contexts/Global/Context";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import TextRestrain from "../styles/TextRestrain";
import CheckoutForm from "./CheckoutForm";
import ButtonRegin from "../styles/ButtonRegin.style";
import BasicCard from "../styles/BasicCard";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY)

const Cart = ({ setShowCart }) => {
  const [global, globalActions] = useContext(GlobalContext)
  const [cart, cartActions ] = useContext(CartContext)

  const [emptyCart, setEmptyCart] = useState(false)
  const [hook, refresh] = useState(false)
  const [details, setDetials] = useState({
    subtotal: 0,
    shipping: 0,
    total: 0
  })

  useEffect(() => {
    const list = Object.values(cart)
    if(!list.length) {
      setEmptyCart(true)
    } else {
      setEmptyCart(false)
    }
    let subtotal = 0
    for (const item of list) {
      subtotal += item.price * item.amount
    }
    const shipping = + import.meta.env.VITE_SHIPPING_PRICE
    const total = shipping + subtotal
    setDetials({
      subtotal,
      shipping,
      total
    })

  }, [cart, hook])

  const [addressList, setAddressList] = useState([])
  const [address, setAddress] = useState({address: "", id: ""})
  const [paymentSecret, setPaymentSecret] = useState("")

  const [openModal, setOpenModal] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [disableCheckout, setDisableCheckout] = useState(false)
  const [elements, setElements] = useState("")

  const getAddressesFromApi = useCallback(async function() {
    try {
      const res = await axios.get(global.api("/user/addresses"), {withCredentials: true})
      setAddressList(res.data.addresses)
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    getAddressesFromApi()
  }, [])

  useEffect(() => {
    if (paymentSecret !== "") {
      setElements(
        <Elements stripe={stripePromise} options={{clientSecret: paymentSecret}} >
          <CheckoutForm/>
        </Elements>
      )
    }
  }, [paymentSecret])

  async function checkoutHandler() {
    if(global.user.loggedIn) {
      setDisableCheckout(true)
      const orderItems = []
      for (const item of Object.values(cart)) {
        orderItems.push({quantity: item.amount, id: item._id})
      }
      const payload = {orderItems, address: address.id}
      try {
        const res = await axios.post(global.api("/user/orders"), payload, {withCredentials:true})
        setPaymentSecret(res.data.paymentIntent)
      } catch (err) {
        console.log(err)
      }
      setOpenModal(true)
      setDisableCheckout(false)
    } else {
      global.navigate("/login")
    }
  }
  
  return (
    <>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BasicCard sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
        }}>
        {elements}
        </BasicCard>
      </Modal>

      <Dialog disableEscapeKeyDown open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Select Address</DialogTitle>
        <DialogContent>
          <Box component="form">
            <FormControl sx={{ m: 1, minWidth: 400 }}>
              <InputLabel id="demo-dialog-select-label">Address</InputLabel>
              <Select
                value={undefined}
                onChange={(e) => setAddress({id: e.target.value.split("/")[0], address: e.target.value.split("/")[1]})}
                defaultValue=""
                input={<OutlinedInput label="Address" />}
              >
                {addressList.map((addr) => <MenuItem key={addr._id} value={addr._id + "/" + addr.address}>{addr.address}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} >Ok</Button>
        </DialogActions>
      </Dialog>


      <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            <span className="close-btn" onClick={() => setShowCart(false)}>
              <MdClose />
              <span className="text">close</span>
            </span>
          </div>

          {emptyCart ? (

          <div className="empty-cart">
              <BsCartX />
              <span>No products in the cart</span>
              <button onClick={() => {global.navigate("/"); setShowCart(false)}} className="return-cta">Return to Shop</button>
          </div>

          ) : (

          <>
          <List style={{height: "100%", overflow: 'auto'}} >
            {Object.values(cart).map((item) => {
              return <CartItems key={item._id} item={item} hook={hook} refresh={refresh} />
            })}
            
          </List>

          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Address:</span>
              <TextRestrain onClick={() => setOpenDialog(true)} style={{cursor: "pointer"}} className="text total"> { address.address || "Select Address" }</TextRestrain>
            </div>
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">{details.subtotal}$</span>
            </div>
            <div className="subtotal">
              <span className="text">Shipping:</span>
              <span className="text total">{details.shipping}$</span>
            </div>
            <div className="subtotal">
              <span className="text">Total:</span>
              <span className="text total">{details.total}$</span>
            </div>
            <div onClick={checkoutHandler} className="button">
              <ButtonRegin disabled={disableCheckout || !address.id} variant="contained" >
                {global.user.loggedIn ? "Checkout" : "Login To Checkout"}
              </ButtonRegin>
            </div>
          </div>
          </>
          )}

        </div>
      </div>
    </>
  );
};

export default Cart;
