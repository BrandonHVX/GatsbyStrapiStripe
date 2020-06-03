import React, {useState, useContext} from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import { CartContext } from "../context/CartContext"
import Layout from "../components/layout"
import {formatPrice} from '../utils/format'


const row = {
    width: '475px',
    margin: '30px auto',
    boxShadow: '0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),inset 0 1px 0 #829fff',
    borderRadius: '4px',
    backgroundColor: '#7795f8',
    position: 'relative',
}

const image= {
    display: 'flex',
    justifyContent: "center"
  
}





const ProductTemplate = ({data}) => {

    const [qty, setQty] = useState(1)
    const { addToCart, productInCart } = useContext(CartContext)

    console.log("ProductTemplate.render data", data)
    return(
        <Layout>

         <div style={{marginTop: '300px'}}>
  <div className="products-content">
            <div class="container">
     
            <div class="text-center">
            <div class="product-card">
			<div class="container-fliud">
				<div class="wrapper row justify-content-center">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div  id="pic-1">
                          <Img fixed={data.strapiProduct.thumbnail.childImageSharp.fixed} />
                          
                          
                          
                          </div>
						
						</div>
				
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{data.strapiProduct.name}</h3>
					
                        <h4 class="product-description">{data.strapiProduct.location}</h4>
                        <h4 class="product-address">{data.strapiProduct.address}</h4>
                        <h4 class="product-city">{data.strapiProduct.city}</h4>
                        <h4 class="product-phone">{data.strapiProduct.phone}</h4>

						<h4 class="price"><span>{formatPrice(data.strapiProduct.price_in_cent)}</span></h4>
                        <div>
                        <div class="action m-3">

                        <Link to="/cart">
							<button  onClick={() => productInCart(data.strapiProduct, qty)}class="add-to-cart btn btn-default" type="button">Checkout</button>
						</Link>
						</div>
          </div>
						
					
					
					
					</div>
				</div>
                <div class="wrapper  row justify-content-center">
			
		
				</div>
			</div>
		</div>











</div>


</div>
</div>
</div>
        </Layout>

    )
}

export default ProductTemplate

export const query = graphql`
    query Pick_DeliverTemplateQuery($id: String!) {
        strapiProduct(id: {eq: $id}) {
            strapiId
            name
            location
            address
            city
            phone
            price_in_cent
            description
            thumbnail {
                childImageSharp {
                    fixed(width: 340){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
           
        }
    }
`