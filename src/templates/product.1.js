// import React, {useState, useContext} from 'react'
// import {graphql} from 'gatsby'
// import Img from 'gatsby-image'
// import { CartContext } from "../context/CartContext"
// import Layout from "../components/layout"
// import {formatPrice} from '../utils/format'


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





// const ProductTemplate = ({data}) => {

//     const [qty, setQty] = useState(1)
//     const { addToCart } = useContext(CartContext)

//     console.log("ProductTemplate.render data", data)
//     return(
//         <Layout>
//             <div>
//             <div class="movie-card">

// <div class="container-one">

//   <div className="cover justify-content-center"> <Img fixed={data.strapiProduct.thumbnail.childImageSharp.fixed} /></div>

//   <div class="back-cover">
//     <div class="details">

//       <div class="title1">Breaking Bad <span>TV-14</span></div>

//       <div class="title2"> TV Series (2008–2013) </div>


//     </div>


//   </div>

//   <div class="about-movie">
//     <div class="colum-one">

//       <fieldset class="starRating">



//         <input id="rating1" type="radio" data-length="1" name="rating" value="1"/>
//         <label for="rating1"></label>

//         <input id="rating2" data-length="2" type="radio" name="rating" value="2" checked/>
//         <label for="rating2"></label>

//         <input id="rating3" type="radio" data-length="3" name="rating" value="3"/>

//         <label for="rating3"></label>


//         <input id="rating4" data-length="4" type="radio" name="rating" value="4"/>
//         <label for="rating4"></label>

//         <input id="rating5" data-length="5" type="radio" name="rating" value="5"/>
//         <label for="rating5"></label>


//       </fieldset>
//       <span class="likes">90 likes</span>

//       <div class="colum-catogary">
//         <span class="tag">Crime</span>
//         <span class="tag">Drama</span>
//         <span class="tag">Thriller</span>
//         <div>
//         </div>
//       </div>
//     </div>

//     <div class="colum-second">

//       <p> When chemistry teacher Walter White is diagnosed with Stage III cancer and given only two years to live, he decides he has nothing to lose.A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling
//         methamphetamine in order to secure his family's financial future...<a href="#">
//       read more
//       </a>
//       </p>
//     </div>
//   </div>
// </div>

// </div>











// <div class="myName">
//   <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/454262/profile/profile-80_2.jpg"/>
//   <a href="https://codepen.io/collection/DpbVvq/" target="_blank"> Eslam UI</a>
// </div>

           

// <div className="product-details">
//             <h2>{data.strapiProduct.name}</h2>
//             <p>{data.strapiProduct.description}</p>
//             <p>Price: {formatPrice(data.strapiProduct.price_in_cent)}</p>
//             <input 
//                 type="number" 
//                 min="0"
//                 value={qty} 
//                 onChange={(event) => setQty(event.target.value)}
//             />
//             <button 
//                 onClick={() => addToCart(data.strapiProduct, qty)}
//                 style={{fontSize: '20px', padding: '24px', borderRadius: '2px'}}>
//                 Add To Cart
//             </button>
//             </div>
// </div>
//         </Layout>

//     )
// }

// export default ProductTemplate

// export const query = graphql`
//     query ProductTemplateQuery($id: String!) {
//         strapiProduct(id: {eq: $id}) {
//             strapiId
//             name
//             price_in_cent
//             description
//             thumbnail {
//                 childImageSharp {
//                     fixed(width: 300){
//                         ...GatsbyImageSharpFixed
//                     }
//                 }
//             }
//             item_image_one {
//                 childImageSharp {
//                     fixed(width: 340){
//                         ...GatsbyImageSharpFixed
//                     }
//                 }
//             }
//         }
//     }
// `