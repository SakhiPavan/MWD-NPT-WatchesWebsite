import React from 'react'
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js';


const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
  <PayPalScriptProvider 
    options={{
      'client-id': 'Ad5ruQbVd8qBKQaz1G2CIDR_xN75IqzUIvytxO-Q35Kh0sjWYyvA4j97TWJzhsycOSlCrZuUVHjPbToU'
      }}
      >

  <PayPalButtons 
  style={{layout: 'vertical'}}
    createOrder={(data, actions) => {
      return actions.order.create({
        purchase_units: [{amount: {value: amount}}],
      });
    }}
  onApprove={(data, actions) => {
    return actions.order.capture().then(onSuccess)
  }}
  onError={onError}
  ></PayPalButtons>

  </PayPalScriptProvider>
)};

export default PayPalButton