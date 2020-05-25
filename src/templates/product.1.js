// import React, {useState, useContext} from 'react'
// import {graphql, Link} from 'gatsby'
// import Img from 'gatsby-image'
// import { CartContext } from "../context/CartContext"
// import Layout from "../components/layout"
// import {formatPrice} from '../utils/format'
// import {Card, Accordion} from 'react-bootstrap'
// import styled from "styled-components"
// import ReactSwipe from "react-swipe"
// import AwesomeSlider from 'react-awesome-slider';

// import { Carousel } from 'react-responsive-carousel';

// const row = {
//     width: '475px',
//     margin: '30px auto',
//     boxShadow: '0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),inset 0 1px 0 #829fff',
//     borderRadius: '4px',
//     backgroundColor: '#7795f8',
//     position: 'relative',
// }

// const image= {
//     display: 'flex',
//     justifyContent: "center"
  
// }


// const pstyle= {
//     fontSize: '20px'
  
// }






// const ProductTemplate = ({data}) => {

//     const [qty, setQty] = useState(1)
//     const { addToCart } = useContext(CartContext)
//     let reactSwipeEl

//     console.log("ProductTemplate.render data", data)
//     return(
//         <Layout>

//          <section className="product-page">
//   <div className="products-content">
//             <div class="container">
        
//             <div class="text-center">
//             <div class="card">
// 			<div class="container-fliud">
// 				<div class="wrapper row justify-content-center">
// 					<div class="preview col-md-8">
//                     <div class="preview-pic tab-content">
//  						  <div  id="pic-1">
 
//                            <Img
//              fixed={data.strapiProduct.thumbnail.childImageSharp.fixed} />
//                           </div>
						
//  						</div>
                
// 					</div>
// 					<div class="details col-md-6">
// 						<h3 class="product-title">{data.strapiProduct.name}</h3>
// 						<div class="rating">
// 							<div class="stars">
// 								<span class="fa fa-star checked"></span>
// 								<span class="fa fa-star checked"></span>
// 								<span class="fa fa-star checked"></span>
// 								<span class="fa fa-star"></span>
// 								<span class="fa fa-star"></span>
// 							</div>
// 							<span class="review-no">41 reviews</span>
// 						</div>
// 						<p class="product-description">{data.strapiProduct.description}</p>
// 						<h4 class="price">Current Price: <span>{formatPrice(data.strapiProduct.price_in_cent)}</span></h4>
// <div><p style={pstyle}> Select your quanity </p>
// <input 
//                 type="number" 
//                 min="0"
//                 value={qty} 
//                 onChange={(event) => setQty(event.target.value)}
//             />
//             </div>
						
					
					
// 						<div class="action m-5">

//                         <Link to="/pickup_delivery">
// 							<button  onClick={() => addToCart(data.strapiProduct, qty)}class="add-to-cart btn btn-default" type="button">add to cart</button>
// 						</Link>
// 						</div>
// 					</div>
// 				</div>











                
// 			</div>




            
// 		</div>


// </div>
// </div>
// </div>
// </section>

//         </Layout>

//     )
// }

// export default ProductTemplate

// export const query = graphql`
//     query ProductTemplateQuery($id: String!) {
//         strapiProduct(id: {eq: $id}) {
//             strapiId
//             name
//             type
//             price_in_cent
//             description
//             thumbnail {
//                 childImageSharp {
//                     fixed(width: 340){
//                         ...GatsbyImageSharpFixed
//                     }
//                 }
//             }
//             products_one {
//                 childImageSharp {
//                     fixed(width: 340){
//                         ...GatsbyImageSharpFixed
//                     }
//                 }
//             }
//             products_two {
//                 childImageSharp {
//                     fixed(width: 340){
//                         ...GatsbyImageSharpFixed
//                     }
//                 }
//             }
           
//         }
//     }
// `