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
            <div class="container">
            <div class="page">
            <div className="section-heading text-center mb-5">
                <h1>Checkout</h1>
                <p className="text-muted">Purchase Cart!</p>
                <hr class="mb-3" />
              </div>
       
            {cart && cart.length > 0 &&
                <>
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
                            {cart.map(product => (
                                <tr>
                                    <td>
                                        <Img 
                                            style={{width: '100px', height: '100px', verticalAlign: 'middle'}}
                                            fixed={product.thumbnail.childImageSharp.fixed} 
                                        />
                                        <span style={{marginLeft: '14px', whiteSpace: 'nowrap'}}>{product.name}</span>
                                    </td>
                                    <td>
                                        {formatPrice(product.price_in_cent)}
                                    </td>
                                    <td style={{textAlign: 'center'}}>
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
                                    <td style={{textAlign: 'center'}}>{formatPrice(cartSubtotal(cart))}</td>
                                          
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
						<tr class="visible-xs">
							<td class="text-center"><strong>
                    {shouldPayShipping(cart) &&
                        <h5>Delivery: {formatPrice(SHIPPING_RATE)}</h5>
                    }
                    {!shouldPayShipping(cart) &&
                        <h5>Shipping is free!</h5>
                    }</strong></td>
						</tr>
						<tr>
							<td>     <button style={{fontSize: '12px'}} href="#" class="btn-shopping"> Continue Shopping</button></td>
							<td colspan="2" class="hidden-xs"></td>
							<td class="hidden-xs text-center"><strong>Total: {formatPrice(cartTotal(cart))}</strong></td>
							<td>



                            </td>
						</tr>
					</tfoot>
                    </table>

              
                   
                </>
            }
            

             

            <div style={{ display: 'flex', justifyContent: "center"}}>
       
                {cart && cart.length > 0 &&
                    <button className="btn-checkout"
                        onClick={() => setShowCheckout(true)}
                        style={{fontSize: '24px', padding: '12px 24px'}}
                    >
                       Start Checkout
                    </button>
                }
            </div>
            {showCheckout &&
                <Checkout cart={cart} />
            }

</div>
</div>
        </Layout>
    )
}