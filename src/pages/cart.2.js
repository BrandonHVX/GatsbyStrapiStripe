// import React, {useState, useCallback, useContext} from 'react'
// import Img from 'gatsby-image'

// import {CartContext} from '../context/CartContext'

// import Layout from '../components/layout'
// import SEO from '../components/seo'
// import Checkout from '../components/Checkout'

// import {
//     cartSubtotal, 
//     cartTotal, 
//     shouldPayShipping, 
//     SHIPPING_RATE
// } from '../utils/cart'
// import {formatPrice} from '../utils/format'

// export default () => {
//     const {cart, addToCart} = useContext(CartContext)
//     console.log("Cart.render cart", cart)
//     console.log("Cart.render addToCart", addToCart)

//     //Force update, credits: https://stackoverflow.com/questions/53215285/how-can-i-force-component-to-re-render-with-hooks-in-react
//     const [, updateState] = useState()
//     const forceUpdate = useCallback(() => updateState({}), [])

//     const [showCheckout, setShowCheckout] = useState(false)

//     return(
//         <Layout>
//    >
//             <SEO title="Cart" />
//             <h2>Cart</h2>
//             {cart && cart.length > 0 &&
//                 <>
//                     <table 
//                                           >
//                         <thead>
//                             <tr>
//                                 <th>
//                                     Product
//                                 </th>
//                                 <th>
//                                     Price
//                                 </th>
//                                 <th>
//                                     Quantity
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cart.map(product => (
//                                 <tr>
//                                     <td>
//                                         <Img 
//                                             style={{width: '100px', height: '100px', verticalAlign: 'middle'}}
//                                             fixed={product.thumbnail.childImageSharp.fixed} 
//                                         />
//                                         <span style={{marginLeft: '14px', whiteSpace: 'nowrap'}}>{product.name}</span>
//                                     </td>
//                                     <td>
//                                         {formatPrice(product.price_in_cent)}
//                                     </td>
//                                     <td style={{ margin: "20px",textAlign: 'center'}}>

//       <div class="input-group  mb-3">
//                                 <div class="input-group-prepend">
//                                     <button  onClick={() => {
//                                             addToCart(product, -1)
//                                             forceUpdate()
//                                         }} class="btn btn-dark btn-sm" id="minus-btn"><i class="fa fa-minus"></i></button>
//                                 </div>


//                                 <input type="number" id="qty_input" class="form-control form-control-xs" value= {product.qty} min="1"/>




//                                 <div class="input-group-prepend">
//                                     <button onClick={() => {
//                                             addToCart(product, 1)
//                                             forceUpdate()
//                                         }} class="btn btn-dark btn-sm" id="plus-btn"><i class="fa fa-plus"></i></button>
//                                 </div>
//                             </div>
                                   

//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                         <tfoot>
// 						<tr class="visible-xs">
// 							<td class="text-center"><strong>   <h3>Subtotal: {formatPrice(cartSubtotal(cart))}</h3></strong></td>
//                             <td class="text-center">   {shouldPayShipping(cart) &&
//                         <h3>Shipping: {formatPrice(SHIPPING_RATE)}</h3>
//                     }
//                     {!shouldPayShipping(cart) &&
//                         <h3>Devlivery Charge</h3>
//                     }</td>
// 						</tr>
					
// 					</tfoot>
//                     </table>

                 
                   
              
//                     <tr>
						
// 							<td colspan="2" class="hidden-xs"></td>
// 							<td class="hidden-xs text-center"><strong><h3>Total: {formatPrice(cartTotal(cart))}</h3></strong></td>
// 							<td>
                                
//                             <div>
//                 {cart && cart.length > 0 &&
//                     <button 
                        
//                         class="btn btn-success btn-block" 
//                     >
//                         Initiate Checkout
//                     </button>
//                 }
//             </div>
    
                                
                                
                            
//                                 </td>
						
                        
                        
                        
                        
                        
                        
//                         </tr>
//                 </>
//             }
            
            
            
            
//                 <Checkout cart={cart} />
        
         
//         </Layout>
//     )
// }