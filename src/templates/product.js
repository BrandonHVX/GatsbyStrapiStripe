import React, {useState, useContext} from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import { CartContext } from "../context/CartContext"
import Layout from "../components/layout"
import {formatPrice} from '../utils/format'
import {Card, Accordion} from 'react-bootstrap'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhoneAlt,
  faEnvelope,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons"
import { Carousel } from 'react-responsive-carousel';

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


const pstyle= {
    fontSize: '20px'
  
}






const ProductTemplate = ({data}) => {

    const [qty, setQty] = useState(1)
    const { addToCart } = useContext(CartContext)
    let reactSwipeEl

    console.log("ProductTemplate.render data", data)
    return(
        <Layout>

         <div className="product-page">
  <div>
            <div class="container ">
        
            <div class="text-center">
            <div className="card" >
           			<div class="container">
			<div class="wrapper row justify-content-center mb-5">
					<div class=" col-lg-8">
                     <div >
 						  <div>
                           <AwesomeSlider>
    <div>                   <Img
            fixed={data.strapiProduct.thumbnail.childImageSharp.fixed} /></div>
    <div>                   <Img
            fixed={data.strapiProduct.thumbnail.childImageSharp.fixed} /></div>
    <div>                   <Img
            fixed={data.strapiProduct.thumbnail.childImageSharp.fixed} /></div>
    <div>                   <Img
            fixed={data.strapiProduct.thumbnail.childImageSharp.fixed} /></div>
  </AwesomeSlider>
            
         
        

</div>







                </div>          
                </div>


                              <div class="details col-lg-4 mt-5">
 						<h3 class="product-title">{data.strapiProduct.name}</h3> 						<div class="rating"> 							<div class="stars"> 								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span> 								<span class="fa fa-star"></span> 					<span class="fa fa-star"></span>							</div>							<span class="review-no">41 reviews</span> 					</div>
 					
 						<h4 class="price">Current Price: <span>{formatPrice(data.strapiProduct.price_in_cent)}</span></h4>
 <div className='mb-5'><p style={pstyle}> </p>


<div>
<div class="form-group">
    <label for="exampleSelect1"> Select your quanity</label>
    <select value={qty} 
                 onChange={(event) => setQty(event.target.value)} class="form-control" id="exampleSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
 
  

</div>


             </div> <Link to="/pickup_delivery"> 							<button  onClick={() => addToCart(data.strapiProduct, qty)}class="add-to-cart btn " type="button">add to cart</button>
						</Link>
</div>
                      
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
    query ProductTemplateQuery($id: String!) {
        strapiProduct(id: {eq: $id}) {
            strapiId
            name
          
            price_in_cent
            description
            thumbnail {
                childImageSharp {
                    fixed(width: 340){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            products_one {
                childImageSharp {
                    fixed(width: 340){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            products_two {
                childImageSharp {
                    fixed(width: 340){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
           
        }
    }
`