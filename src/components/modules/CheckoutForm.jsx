import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import ButtonRegin from '../styles/ButtonRegin.style';
import { Typography } from '@mui/material';

const CheckoutForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
 
        const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
            return_url: import.meta.env.VITE_FRONTEND_URL + "/orders",
        },
        });

        if (result.error) {
        // Show error to your customer (for example, payment details incomplete)
        console.log(result.error.message);
        }
       
    } catch (err) {
        console.log(err)
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Typography variant='h5' sx={{marginTop: "5px"}}>Total: {total}$</Typography>
      <ButtonRegin type='submit' variant='contained' disabled={!stripe}>Place Order</ButtonRegin>
    </form>
  )
};

export default CheckoutForm;