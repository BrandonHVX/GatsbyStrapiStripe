import React, {useState, useCallback, useContext} from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from "gatsby"
import Scroll from "../components/Scroll"
import {CartContext} from '../context/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhoneAlt,

} from "@fortawesome/free-solid-svg-icons"
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
    const {cart, addToCart, removeItem} = useContext(CartContext)
    console.log("Cart.render cart", cart)
    console.log("Cart.render addToCart", addToCart)

    

    //Force update, credits: https://stackoverflow.com/questions/53215285/how-can-i-force-component-to-re-render-with-hooks-in-react
    const [, updateState] = useState()
    const forceUpdate = useCallback(() => updateState({}), [])

    const [showCheckout, setShowCheckout] = useState(false)

    return(
        <Layout>
            <SEO title="Cart" />
            <div className="container">
            <div  className="checkout-page">
            <div classNameName="section-heading text-center mb-5">
                <h1>Checkout</h1>
              
                <hr className="mb-3" />
              </div>
              	<Link to="/products-page"><button className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</button></Link>
							
							<td colspan="2" className="hidden-xs"></td>
							
						
						
              <div className="container mt-5">
              <div className="checkout">
            {cart && cart.length > 0 &&
                <>
                    <table id="cart" className="table table-hover table-condensed">
    				<thead>
						<tr>
							<th style={{width:"20%"}}></th>
                            <th style={{width:"20%"}}>Product</th>
							<th style={{width:"20%"}}>Price</th>
							<th style={{width:"4%"}}>Quantity</th>
							<th style={{width:"22%"}} className="text-center">Remove</th>
							<th style={{width:"10%"}}></th>
						</tr>
					</thead>
					<tbody>
                    {cart.map(product => (
						<tr>
							<td>
								<div className="row">
                     
									<div className="col-sm-2 hidden-xs">
                                    <Img 
                                            style={{width: '100px', height: '100px', verticalAlign: 'middle'}}
                                            fixed={product.thumbnail.childImageSharp.fixed} 
                                        />
                                    
                                    
                                    </div>
								
								</div>
							</td>
                            <td data-th="Product">   {product.name}</td>
							<td data-th="Price">   {formatPrice(product.price_in_cent)}</td>
							<td classNameName="text-center" data-th="Quantity">
							{product.qty}
							</td>
							<td data-th="Remove" className="text-center">
                            <button className="btn-remove-cart"  onClick={() => removeItem(product)} ><i class="fas fa-trash-alt"></i></button>  
                            
                            </td>
							<td className="actions" data-th="">
							</td>
						</tr>
                    ))}
					</tbody>
					<tfoot>
						<tr className="visible-xs">
						</tr>
					
					</tfoot>
				</table>
              
                   
                </>
            }
                    <div >
                        <row>
       	<td class="hidden-xs text-center"><strong>Total Price<h1> {formatPrice(cartTotal(cart))}</h1></strong></td>

</row>

           <div  class="mt-5 ">   
           {cart && cart.length > 0 &&


<button className="btn-checkout"
                 
                 onClick={() => setShowCheckout(true)}
                 style={{fontSize: '24px', padding: '12px 24px'}}
             >
                Begin Checkout
             </button>
        

                  




                }</div>
               <div >   {showCheckout &&
                <Checkout cart={cart} />
            }</div>
            </div>
          
         
            </div>






            
            </div>
            

 

</div>

</div>
        </Layout>
    )
}