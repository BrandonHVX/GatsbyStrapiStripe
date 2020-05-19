// import React, {useEffect, useState, useContext} from 'react'
// import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
// import {Form, Col, Label, Row, Button} from 'react-bootstrap';
// import {CartContext} from '../context/CartContext'
// import {API_URL} from '../utils/url'

// import {formatPrice} from '../utils/format'


// const Card_Styles = {
//     style: {
//         base: {
//             padding: '24px 12px',
//             fontSize: '16px'
//         }
//     }
// }






// export default () => {
//     const stripe = useStripe()
//     const elements = useElements()

//     const {cart, clearCart} = useContext(CartContext)

//     const [shipping_name, setShipping_name] = useState('')
//     const [shipping_address, setShipping_address] = useState('')
//     const [shipping_state, setShipping_state] = useState('')
//     const [shipping_city, setShipping_city] = useState('')
//     const [shipping_zip, setShipping_zip] = useState('')

//     const [token, setToken] = useState(null)
//     const [total, setTotal] = useState('loading')

//     console.log("CheckoutForm.render total", total)

//     const [loading, setLoading] = useState(false)

//     const [success, setSuccess] = useState(null) 

//     const valid = () => {
//         if(!shipping_name || !shipping_address || !shipping_state || !shipping_city ){
//             return false
//         }
        
//         return true
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault()
//         setLoading(true)
//         console.log("HandleSubmit", event)
//         const result = await stripe.confirmCardPayment(token, {
//             payment_method: {
//                 card: elements.getElement(CardElement)
//             }
//         })

//         const data = {
//             paymentIntent: result.paymentIntent,
//             shipping_name,
//             shipping_address,
//             shipping_state,
//             shipping_city,
//             shipping_zip,
//             cart
//         }
        
//         const response = await fetch(`${API_URL}/orders`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })

//         const order = await response.json()

//         setSuccess(true)

//         setLoading(false)

//         clearCart()
//     }

//     useEffect(() => {
//         const loadToken = async () => {
//             setLoading(true)
//             const response = await fetch(`${API_URL}/orders/payment`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     cart: cart.map(product => (
//                         {...product, ...{id: product.strapiId}}
//                     ))
//                 })
//             })

//             const data = await response.json()

//             console.log("loadToken data", data)
//             setToken(data.client_secret)
//             setTotal(data.amount)
//             setLoading(false)
//         }

//         loadToken()
//     }, [cart])

//     return(
//         <div
//             style={{margin: '24px 0'}}
//         >
//             {!loading && <h3>Total: {formatPrice(total)}</h3>}
//             {loading && <h3>Loading</h3>}

//             {!success &&
//                  <form 
//                     style={{
//                         padding: '24px 12px',
//                         border: '1px solid #eee',
//                         margin: '20px 0'
//                     }}
//                     onSubmit={handleSubmit}
//                 >
//                     <h2>Receiver</h2>
//                     <div>
//                     <input placeholder="name" class="form-control" 
//                 value={shipping_name}
//                 onChange={(event) => setShipping_name(event.target.value)} 
//             /></div>
//    <Form>
//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridEmail">
     
//       <Form.Control value={shipping_name}  onChange={(event) => setShipping_name(event.target.value)}  type="text" placeholder="Full Name" />
//     </Form.Group>


//   </Form.Row>

//   <Form.Group controlId="formGridAddress1">
//     <Form.Control value={shipping_address}  onChange={(event) => setShipping_address(event.target.value)} placeholder="Address" />
//   </Form.Group>

//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridCity">
//       <Form.Control value={shipping_city}  onChange={(event) => setShipping_city(event.target.value)} placeholder="City" />
//     </Form.Group>

//   <Form.Group as={Col} controlId="formGridCity">
//       <Form.Control value={shipping_state}  onChange={(event) => setShipping_state(event.target.value)} placeholder="Province" />
//     </Form.Group>

    
//   </Form.Row>

//   <Form.Row>
//   <Form.Group as={Col} controlId="formGridZip">

// <Form.Control placeholder="Phone" />
// </Form.Group>
//   </Form.Row>

//   <Form.Group id="formGridCheckbox">
//     <Form.Check type="checkbox" label="Pick Up" />
//   </Form.Group>
//   <Form.Group id="formGridCheckbox">
//     <Form.Check type="checkbox" label="Delivery" />
//   </Form.Group>
// </Form>
// <Form>
//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridEmail">
     
//       <Form.Control type="text" placeholder="First Name" />
//     </Form.Group>
//   </Form.Row>

//   <Form.Row>



//     <Form.Group as={Col} controlId="formGridZip">

//       <Form.Control placeholder="Email" />
//     </Form.Group>


//   </Form.Row>


// </Form>
          
//                     <CardElement options={Card_Styles}/>

//                     <button  style={{marginTop: '12px'}}
//                         disabled={!stripe || !valid()} class="btn btn-primary btn-lg btn-block" type="submit">
//                                 <i class="fa fa-credit-card"></i> Continue to checkout</button>
                    
//                 </form>
//             }
//             {success &&
//                 <h2>Your order was successfully processed!</h2>
//             }
           
//         </div>
//     )
// }