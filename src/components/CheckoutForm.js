import React, {useEffect, useState, useContext} from 'react'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'

import {CartContext} from '../context/CartContext'

import {formatPrice} from '../utils/format'



const Card_Styles = {
    style: {
        base: {
            padding: '24px 12px',
            fontSize: '16px'
        }
    }
}

const generateInput = (label, value, setOnChange, inline = false) => {
    return(
        <div 
            style={{display: inline ? 'inline' : 'block'}}
        >
            <div
                style={{display: inline ? 'inline' : 'block'}}
            >
                <label htmlFor={label}>{label}</label>
            </div>
            
            <input id={label}
                value={value}
                onChange={(event) => setOnChange(event.target.value)} 
            />
        </div>
    )
}



export default () => {
    const stripe = useStripe()
    const elements = useElements()

    const {cart, clearCart} = useContext(CartContext)

    const [receiver_name, setReceiver_name] = useState('')
    const [receiver_address, setReceiver_address] = useState('')
    const [receiver_state, setReceiver_state] = useState('')
    const [receiver_country, setReceiver_country] = useState('')
    const [receiver_postal, setReceiver_postal] = useState('')

    const [token, setToken] = useState(null)
    const [total, setTotal] = useState('loading')

    console.log("CheckoutForm.render total", total)

    const [loading, setLoading] = useState(false)

    const [success, setSuccess] = useState(null) 

    const valid = () => {
        if(!receiver_name || !receiver_address || !receiver_state || !receiver_country || !receiver_postal){
            return false
        }
        
        return true
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const billing_details = {
        name:document.getElementById("receiver_name").value,
        phone:document.getElementById("receiver_phone").value,
        address: {
              city: document.getElementById("receiver_city").value,
              country: document.getElementById("receiver_country").value,
              line1: document.getElementById("receiver_address").value,
              line2: document.getElementById("receiver_postal").value
            }
          };
        setLoading(true)
        console.log("HandleSubmit", event)
        const result = await stripe.confirmCardPayment(token, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details
             
                
            }
        })

        const data = {
            paymentIntent: result.paymentIntent,
          
            cart,
       
         
            
          
        }
        
     

        setSuccess(true)

        setLoading(false)

        clearCart()
    }

    useEffect(() => {
        const loadToken = async () => {
            setLoading(true)
            const response = await fetch('http://localhost:1337/orders/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cart: cart.map(product => (
                        {...product, ...{id: product.strapiId}}
                    )),
                    

                   
                })
            })

            const data = await response.json()

            console.log("loadToken data", data)
            setToken(data.client_secret)
            setTotal(data.amount)
            setLoading(false)
        }

        loadToken()
    }, [cart])

    return(
        <div
            style={{margin: '24px 0'}}
        >
            {!loading && <h3>Total: {formatPrice(total)}</h3>}
            {loading && <h3>Loading</h3>}

            {!success &&
                 <form 
                    style={{
                        padding: '24px 12px',
                        border: '1px solid #eee',
                        margin: '20px 0'
                    }}
                    onSubmit={handleSubmit}
                >
    




<div>
    <strong>Receiver </strong>
    <p><input type="text" name="receiver_name" placeholder="Receiver Name" className="input" id="receiver_name" /></p>
    <p><input type="text" name="receiver_address" placeholder="Address" className="input" id="receiver_address" /></p>
    <p><input type="text" name="receiver_city" placeholder="City" className="input" id="receiver_city" /></p>
    <p><input type="text" name="receiver_country" placeholder="Country" className="input" id="receiver_country" /></p>
    <p><input type="text" name="receiver_postal" placeholder="Postal Code" className="input" id="receiver_postal" /></p>
    <p><input type="text" name="receiver_phone" placeholder="Phone" className="input" id="receiver_phone" /></p>

</div>
<div>
    <strong>Sender </strong>
    <p><input type="text" name="sender_name" placeholder="Name on Card" className="input" id="receiver_phone" /></p>
   

</div>





                  
    
    
                    <CardElement options={Card_Styles}/>
                    <button 
                        style={{marginTop: '12px'}}
                        disabled={!stripe }
                    >
                        Buy it
                    </button>
                </form>
            }
            {success &&
                <h2>Your order was successfully processed!</h2>
            }
           
        </div>
    )
}