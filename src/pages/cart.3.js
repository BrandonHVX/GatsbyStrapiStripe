import React, {useState, useCallback, useContext} from 'react'
import Img from 'gatsby-image'

import {CartContext} from '../context/CartContext'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Checkout from '../components/Checkout'

import {
    cartSubtotal, 
    cartTotal, 
    shouldPayShipping, 
    SHIPPING_RATE
} from '../utils/cart'
import {formatPrice} from '../utils/format'

export default () => {
    const {cart, addToCart} = useContext(CartContext)
    console.log("Cart.render cart", cart)
    console.log("Cart.render addToCart", addToCart)

    //Force update, credits: https://stackoverflow.com/questions/53215285/how-can-i-force-component-to-re-render-with-hooks-in-react
    const [, updateState] = useState()
    const forceUpdate = useCallback(() => updateState({}), [])

    const [showCheckout, setShowCheckout] = useState(false)

    return(
        <Layout>

            <SEO title="Cart" />
            <main  id="main" role="main">

              <div class="container">
        <section class="page" id="checkout-banner">
        <div className="section-heading text-center mb-5">
                <h1>Checkout</h1>
                <p className="text-muted">Purchase Cart!</p>
                <hr class="mb-3" />
              </div>
        {cart && cart.length > 0 &&
                <>
                	<button class=""><i class="fa fa-angle-left"></i> Continue Shopping</button>
                  {cart.map(product => (
                <table id="cart" class="table table-hover table-condensed">
                
    				<thead>
						<tr>
							<th style={{width:"50%"}}>Product</th>
							<th style={{width:"50%"}}>Price</th>
							<th style={{width:"50%"}}>Quantity</th>
							<th style={{width:"50%"}}class="text-center">Subtotal</th>
							<th style={{width:"50%"}}></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td data-th="Product">
								<div class="row">
									<div class="col-sm-2 hidden-xs">
                                    
                                    <Img 
                                            style={{width: '100px', height: '100px', verticalAlign: 'middle'}}
                                            fixed={product.thumbnail.childImageSharp.fixed} 
                                        />
                                    
                                    
                                    </div>
									
								</div>
							</td>
							<td data-th="Price">{formatPrice(product.price_in_cent)}</td>
							<td data-th="Quantity">
                            <span onClick={() => {
                                             addToCart(product, -1)
                                             forceUpdate()
                                         }}>-</span>
                                         {product.qty}
                                         <span onClick={() => {
                                             addToCart(product, 1)
                                             forceUpdate()
                                         }}>+</span>


							</td>
							<td data-th="Subtotal" class="text-center">{formatPrice(cartSubtotal(cart))}</td>
							<td class="actions" data-th="">
													
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td class="text-center"><strong>
                                
                            {shouldPayShipping(cart) &&
                        <h5>Delivery Charge: {formatPrice(SHIPPING_RATE)}</h5>
                    }
                    {!shouldPayShipping(cart) &&
                        <h3>shipping free</h3>
                    }
                    
                    
                                
                                
                                
                                </strong></td>
						</tr>
						<tr>
						
							<td colspan="2" class="hidden-xs"></td>
							<td class="hidden-xs text-center"><strong> Total:{formatPrice(cartTotal(cart))}</strong></td>
							<td></td>
						</tr>
					</tfoot>
				</table>

                  ))}



                 
                   
              
                    <tr class="text-center">
						
							<td colspan="2" class="hidden-xs"></td>
							
							<td>
                                
                            <div>
          
            </div>
    
                                
                                
                            
                                </td>
						
    
                        
                        </tr>

        
           
                 
                  
                        <Checkout cart={cart} />
                   
                
            
    
hello








                </>








            }
            
        </section>
        </div>

      
    </main>
        
         
        </Layout>
    )
}