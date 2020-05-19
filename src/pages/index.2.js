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
      

//       justifyContent: 'center',
     
//     }}>



//     {data.allStrapiProduct.nodes.map(product => (
//       <Link to={fromProductSlugToUrl(product.slug)}>


   
//    <div class="blog-slider">
//   <div class="blog-slider__wrp swiper-wrapper">
//     <div class="blog-slider__item swiper-slide">
//       <div class="blog-slider__img">
        
//        <Img class="img" fixed={product.thumbnail.childImageSharp.fixed} /> 
//       </div>
//       <div class="blog-slider__content">

//         <div class="blog-slider__title">{product.name}</div>
//         <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
//         <a href="#" class="blog-slider__button">READ MORE</a>
//       </div>
//     </div>
  
    
 
    
//   </div>
//   <div class="blog-slider__pagination"></div>
// </div>





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
//             fixed(width: 300){
//               ...GatsbyImageSharpFixed
//           }
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