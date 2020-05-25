import React, { useEffect, useState, useContext } from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"

import { CartContext } from "../context/CartContext"
import Scroll from "../components/Scroll"
import { formatPrice } from "../utils/format"
import {
  cartSubtotal, 
  cartTotal, 
  shouldPayShipping, 
  SHIPPING_RATE
} from '../utils/cart'
import { API_URL } from "../utils/url"

const Card_Styles = {
  style: {
    base: {
      padding: "24px 12px",
      fontSize: "16px",
    },
  },
}




const iframeStyles = {
    base: {
      color: "#000",
      border: "soild 2px red",
      padding: "34px 32px",
      fontSize: "16px",
    },
    invalid: {
      iconColor: "red",
      color: "red"
    },
    complete: {
      iconColor: "green"
    }
  };

  const cardElementOpts = {
    iconStyle: "solid",
    style: iframeStyles,
    base: {
      color: "#000",
      border: "soild 2px red",
      padding: "34px 32px",
      fontSize: "16px",
    }
  
  };





const generateInput = (label, value, setOnChange, inline = false) => {
  return (
    <div style={{ display: inline ? "inline" : "block" }}>
      <div style={{ display: inline ? "inline" : "block" }}>
        <label htmlFor={label}>{label}</label>
      </div>

      <input class="form-control my-input"
        id={label}
        value={value}
        onChange={event => setOnChange(event.target.value)}
      />
    </div>
  )
}

export default () => {
  const stripe = useStripe()
  const elements = useElements()

  const { cart, clearCart } = useContext(CartContext)
  const [name_on_card, setName_on_card] = useState("")
  const [sender_email, setSender_email] = useState("")
  const [shipping_name, setShipping_name] = useState("")
  const [shipping_address, setShipping_address] = useState("")
  const [shipping_state, setShipping_state] = useState("")
  const [shipping_country, setShipping_country] = useState("")
  const [shipping_zip, setShipping_zip] = useState("")

  const [token, setToken] = useState(null)
  const [total, setTotal] = useState("loading")

  console.log("CheckoutForm.render total", total)

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(null)

  const valid = () => {
    if (
      !shipping_name ||
      !shipping_address ||
      !shipping_state ||
      !shipping_country ||
      !shipping_zip ||
      !name_on_card ||
      !sender_email
    ) {
      return false
    }

    return true
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    console.log("HandleSubmit", event)
    const result = await stripe.confirmCardPayment(token, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })

    const data = {
      paymentIntent: result.paymentIntent,
      shipping_name,
      shipping_address,
      shipping_state,
      shipping_country,
      shipping_zip,
      name_on_card,
      sender_email,
      cart,
    }

    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const order = await response.json()

    setSuccess(true)

    setLoading(false)

    clearCart()
  }

  useEffect(() => {
    const loadToken = async () => {
      setLoading(true)
      const response = await fetch(`${API_URL}/orders/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: cart.map(product => ({
            ...product,
            ...{ id: product.strapiId },
          })),
        }),
      })

      const data = await response.json()

      console.log("loadToken data", data)
      setToken(data.client_secret)
      setTotal(data.amount)
      setLoading(false)
    }

    loadToken()
  }, [cart])

  return (
    <div style={{ margin: "24px 0" }}>
  

      {!success && (
        <form
          style={{
            padding: "24px 12px",
            border: "1px solid #eee",
            margin: "20px 0",
          }}
          onSubmit={handleSubmit}
        >

<div class="container">
<div class="row">
<div class="col-md-6">
<div className="section-heading text-center m-5">
                <h5 class="form-heading">Receiver</h5>
                <p className="text-muted">Person Receiving Cart</p>
                <hr class="" />
              </div>
{generateInput("Receiver Name", shipping_name, setShipping_name)}
          {generateInput("Receiver Address",shipping_address,setShipping_address)}
          {generateInput("Receiver Province", shipping_state, setShipping_state)}
          {generateInput("Receiver City", shipping_country, setShipping_country)}
          {generateInput("Phone", shipping_zip, setShipping_zip)}

</div>
<div class="col-md-6">
<div className="section-heading text-center m-5">
                <h3 class="form-heading">Sender</h3>
                <p className="text-muted">Person Sending Cart</p>
                <hr class="" />
              </div>
{generateInput("Name on Card",name_on_card, setName_on_card)}
          {generateInput("E-mail",sender_email,setSender_email)}
<div className="mt-3">Credit/Debit Card Number</div>
          <CardElement class="card mt-4"   options={cardElementOpts}
          />
          
          <button class="btn-buy mb-5" style={{ marginTop: "12px" }} disabled={!stripe || !valid()}>
            Buy it
          </button>
          {!loading && <h3 class="form-heading"><div><h5 class='form-heading-charge' >Total Charge</h5></div> {formatPrice(cartTotal(cart))}</h3>}
      {loading && <h3>Loading</h3>}
</div>

</div>





</div>



        </form>
      )}
      {success &&   <div className="section-heading text-center mb-5">
                <h1>Thank You!</h1>
            <h2 className="text-center">Your order was successfully processed!</h2>  
                <hr class="mb-3" />
              </div>}
    </div>
  )
}
