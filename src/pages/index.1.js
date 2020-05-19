// import React from "react"
// import { Link, graphql } from "gatsby"
// import Img from 'gatsby-image'
// import BackgroundImage from 'gatsby-background-image'
// import Header from "../components/header"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
// import {formatPrice} from '../utils/format'
// import {fromProductSlugToUrl} from '../utils/products'


// const IndexPage = ({data}) => (
//   <Layout>
     
//     <SEO title="Home" />
//     <div style={{
//       display: 'flex',
//       flexWrap: 'wrap',
//       marginTop: '100px',
//       padding:'50px',

//       justifyContent: 'center',
     
//     }}>



//     {data.allStrapiProduct.nodes.map(product => (
//       <Link to={fromProductSlugToUrl(product.slug)}>


//  <div className="movie-card-container">
//                 <div className="image-container">
//                     <div
                        
//                         style={{ backgroundImage: `url(${product.thumbnail.childImageSharp.fixed}  )` }}
//                     />



// <BackgroundImage
// className="bg-image"
// fluid={product.thumbnail.childImageSharp.fixed}
// >



// </BackgroundImage>



//                 </div>
//                 <div className="movie-info">
         
           
//                         <h1>{product.name}</h1>
//                         <small>{product.description}</small>
                    
//                     <h4>Rating: 100 / 10</h4>
//                     <p>plot</p>
           
//                 </div>
//             </div>
   
//             <div class="movie-container m-5 p-5">
//   <div class="row d-flex align-items-stretch">
//     <div class="col-md-5 col-lg-5">
 
     

// <Img fixed={product.thumbnail.childImageSharp.fixed} /> 
//     </div>
//     <div class="col-md-7 col-lg-7 d-flex flex-column justify-content-start">
//       <h1 class="mb-3">Avengers: Endgame</h1>
//       <ul class="movie-tags">
//         <li class="selected">8.5</li>
//         <li>2019</li>
//         <li>3h 1min</li>
//         <li>Action</li>
//       </ul>
//       <div style={{clear:"both"}}> </div>

//       <div class="mt-auto bd-highlight mb-2">
//       <a href="#" class="btn-watch"><i class="fas fa-play mr-2"></i>Watch Trailer</a>
//       </div>
//     </div>
//   </div>
// </div>

// <a class="copyright" href="https://dribbble.com/shots/8277604-Day-049-Movie-Card">Click for design</a>
//      <div className="card m-3" style={{width:300}} >
  
//  {/* <Img fixed={product.item_image_one.childImageSharp.fixed} />   */}
//   {/* <div className="card-body">
//        <h5 className="card-title">{product.name}</h5>
//        <p className="card-text">{product.description}</p>
//        <button className="btn btn-primary">  {formatPrice(product.price_in_cent)}</button>
//      </div> */}
//    </div>




//      </Link>
          
           
           
//       ))}
//       </div>
      
//     <Link to="/page-2/">Go to page 2</Link>
    
//   </Layout>
// )

// export default IndexPage


// export const pageQuery = graphql`
//   query MyQuery {
//     allStrapiProduct {
//       nodes {
//         id
//         description
//         created_at
//         name
//         price_in_cent
//         strapiId
//         slug
//         thumbnail {
//           childImageSharp {
//             fixed(width: 300, height: 300) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//         item_image_one {
//           childImageSharp {
//             fixed(width: 300, height: 300){
//                   ...GatsbyImageSharpFixed
//               }
//           }
//       }
//       }
//     }
//   }
// `