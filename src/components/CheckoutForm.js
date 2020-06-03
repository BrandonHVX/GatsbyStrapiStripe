import React, { useEffect, useState, useContext } from "react"
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js"

import { CartContext } from "../context/CartContext"
import Scroll from "../components/Scroll"
import { formatPrice } from "../utils/format"
import { navigate } from "gatsby"
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
  const [name, setName] = useState("")
  const [receipt_email, setReceipt_email] = useState("")
  const [receiver_name, setReceiver_name] = useState("")
  const [receiver_address, setReceiver_address] = useState("")
  const [receiver_state, setReceiver_state] = useState("")
  const [receiver_city, setReceiver_city] = useState("")
  const [receiver_phone, setReceiver_phone] = useState("")

  const [token, setToken] = useState(null)
  const [total, setTotal] = useState("loading")

  console.log("CheckoutForm.render total", total)

  const [loading, setLoading] = useState(false)

  const [success, setSuccess] = useState(null)

  const valid = () => {
    if (
      !receiver_name ||
      !receiver_address ||
      !receiver_state ||
      !receiver_city ||
      !receiver_phone ||
      !name

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
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: event.target.name.value,

        },



      },

      receipt_email: event.target.receipt_email.value,


    })






    const data = {
      paymentIntent: result.paymentIntent,
      receiver_name,
      receiver_address,
      receiver_state,
      receiver_city,
      receiver_phone,
      name,
      receipt_email,
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
          receiver_name: name,
          receiver_phone: "555-555-5555",



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

                <input
                  type="text"
                  name="receiver_name"
                  placeholder="Receiver Name"
                  value={receiver_name}
                  onChange={e => setReceiver_name(e.target.value)}
                />
                <input
                  type="name"
                  name="receiver_address"
                  placeholder="Receiver/Delivery Address"
                  value={receiver_address}
                  onChange={e => setReceiver_address(e.target.value)}
                />
                <input
                  type="name"
                  placeholder="Receiver Province"
                  name="receiver_state"
                  value={receiver_state}
                  onChange={e => setReceiver_state(e.target.value)}
                />
                <input
                  type="name"
                  placeholder="Receiver City"
                  name="receiver_country"
                  value={receiver_city}
                  onChange={e => setReceiver_city(e.target.value)}
                />
                <input
                  type="name"
                  placeholder="Receiver Phone"
                  name="receiver_phone"
                  value={receiver_phone}
                  onChange={e => setReceiver_phone(e.target.value)}
                />
              </div>
              <div class="col-md-6">
                <div className="section-heading text-center m-5">
                  <h3 class="form-heading">Sender</h3>
                  <p className="text-muted">Person Sending Cart</p>
                  <hr class="" />
                </div>
                <input
                  type="text"
                  placeholder="Name on Card"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <input
                  type="name"
                  placeholder="Email"
                  name="receipt_email"
                  value={receipt_email}
                  onChange={e => setReceipt_email(e.target.value)}
                />
                <div className="mt-3">Credit/Debit Card Number</div>
                {/* <CardElement class="card mt-4" options={cardElementOpts}
                /> */}
                <CardNumberElement />
                <CardCvcElement />
                <CardExpiryElement />

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
      {success && navigate("/success/")
      }
    </div>
  )
}
