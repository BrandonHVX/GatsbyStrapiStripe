// import React, {useEffect, useState, useContext} from 'react'
// import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
// import {Form, Col, Label, Row, Button, Container}  from 'react-bootstrap';
// import {CartContext} from '../context/CartContext'
// import {API_URL} from '../utils/url'
// import { Link } from "gatsby"

// import {
//     cartSubtotal, 
//     cartTotal, 
//     shouldPayShipping, 
//     SHIPPING_RATE
// } from '../utils/cart'
// import {formatPrice} from '../utils/format'


// const Card_Styles = {
//     style: {
//         base: {
//             padding: '24px 12px',
//             fontSize: '16px'
//         }
//     }
// }

// // const generateInput = (label, value, setOnChange, inline = false) => {
// //     return(
// //         <div 
// //             style={{display: inline ? 'inline' : 'block'}}
// //         >
// //             <div
// //                 style={{display: inline ? 'inline' : 'block'}}
// //             >
// //                 <label htmlFor={label}>{label}</label>
// //             </div>
            
// //             <input id={label}
// //                 value={value}
// //                 onChange={(event) => setOnChange(event.target.value)} 
// //             />
// //         </div>
// //     )
// // }



// export default () => {
//     const stripe = useStripe()
//     const elements = useElements()

//     const {cart, clearCart} = useContext(CartContext)
//     const [receipt_email, setReceipt_email] = useState('')
//     const [receiver_name, setReceiver_name] = useState('')
//     const [shipping_name, setShipping_name] = useState('')
//     const [shipping_address, setShipping_address] = useState('')
//     const [shipping_state, setShipping_state] = useState('')
//     const [shipping_city, setShipping_city] = useState('')
//     const [shipping_country, setShipping_country] = useState('')
//     const [shipping_phone, setShipping_phone] = useState('')


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
//                 card: elements.getElement(CardElement),
                
//             }
//         })

//         const data = {
//             paymentIntent: result.paymentIntent,
//             shipping_name,
//             shipping_address,
//             shipping_state,
//             shipping_city,
//             shipping_country,
//             shipping_phone,
//             receiver_name,
//             receipt_email,
//             cart
//         }
        
//         const response = await fetch("http://localhost:1337/orders", {
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
//             const response = await fetch("http://localhost:1337/orders/payment", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     cart: cart.map(product => (
//                         {...product, ...{
//                             id: product.strapiId,
//                             name: product.name
//                         }}
                        
//                     )),
//                     receipt_email: "test@gmail.com",
//                     receiver_name: JSON.stringify(shipping_name)

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
          
      
//                  <form 
//                     style={{
//                         padding: '24px 12px',
//                         border: '1px solid #eee',
//                         margin: '20px 0'
//                     }}
//                     onSubmit={handleSubmit}
//                 >      {!success &&

// <Container>
  
// <Row>
//     <Col sm={6}> 
//      <h3>Receiver</h3>
//     <Form>
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

// </Form>


//     </Col>
//     <Col sm={6}>
//     <h3>Sender</h3>
//     <Form>
//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridName">
     
//       <Form.Control type="name" placeholder="Name on Card" />
//     </Form.Group>
//   </Form.Row>

//   <Form.Row>



//     <Form.Group as={Col} controlId="formGridZip">

//       <Form.Control placeholder="Receipt Email" />
//     </Form.Group>


//   </Form.Row>


// </Form>
//      {!loading && 	<td class="hidden-xs text-center"><strong><h3>Total: {formatPrice(cartTotal(cart))}</h3></strong></td>}
//             {loading && <h3>Loading</h3>}
    
//      <CardElement options={Card_Styles}/>

//     <div style={{float: 'right',
// marginTop:'30px',}}>
//                     <button 
                    
//                     className="btn "
//                         style={{marginTop: '12px'}}
//                         disabled={!stripe || !valid()}
//                     >
//                         Buy it
//                     </button>
// </div>
    
//     </Col>
   

// </Row>

// </Container>


//  }
//             {success &&
//                 <h2>Your order was successfully processed!</h2>
//             }
           
                   
//                 </form>
           
//         </div>
//     )
// }