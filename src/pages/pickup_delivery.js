import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Scroll from '../components/Scroll';
import demo1 from "../images/bonmaket-moblie.jpg"
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {formatPrice} from '../utils/format'
import {fromProductSlugToUrl, fromDeliverySlugToUrl} from '../utils/products'
import herobg from "../images/bon-elipse2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhoneAlt,
  faEnvelope,
  faTruck,
  faSeedling,
  faAward,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons"


const masthead = {
  position: 'relative',
  width: '100%',
height: '100vh',
backgroundColor: 'blue',
  backgroundImage: `url(${Image})`,
 
}








const Pickup_DeliveryPage = ({data}) => (
  <Layout>
     
    <SEO title="Home" />
     
  <section className="delivery-pickup">
        <div>
   
    
        <div className="section-heading text-center">
                    <h1>Pick-Up Or Delivery</h1>
                    <p className="text-muted">Please Select</p>
              <hr className="mb-3" />
              <Link to="/products-page"><button className="btn btn-warning"><i className="fa fa-angle-left"></i> Back To Products</button></Link>
                    
                     </div>
                   
                     {data.allStrapiProduct.nodes.slice(4,5).map(product => (
       <Link to={fromDeliverySlugToUrl(product.slug)}>


   
    <div className="product-slider">
   <div className="product-slider__wrp swiper-wrapper">
     <div className="product-slider__item swiper-slide">
       <div className="product-slider__img">
        
        <Img className="img" fixed={product.thumbnail.childImageSharp.fixed} /> 
       </div>
       <div className="product-slider__content">

         <div className="product-slider__title">{product.name}</div>
       
         <button className="btn">Select</button>
       </div>
     </div>
   </div>   <div className="product-slider__pagination"></div>
 </div>

      </Link>
       
      ))}   
                                 {data.allStrapiProduct.nodes.slice(3,4).map(product => (
       <Link to={fromDeliverySlugToUrl(product.slug)}>


   
    <div className="product-slider">
   <div className="product-slider__wrp swiper-wrapper">
     <div className="product-slider__item swiper-slide">
       <div className="product-slider__img">
        
        <Img className="img" fixed={product.thumbnail.childImageSharp.fixed} /> 
       </div>
       <div className="product-slider__content">

         <div className="product-slider__title">{product.name}</div>
       
         <button className="btn">Select</button>
       </div>
     </div>
   </div>   <div className="product-slider__pagination"></div>
 </div>

      </Link>
       
      ))}      
         
          
        </div>
      </section>
      <div className="overlay"></div>
       
  </Layout>
)

export default Pickup_DeliveryPage


export const pageQuery = graphql`
  query Pickup_DeliveryQuery {
    allStrapiProduct {
      nodes {
        id
        description
        created_at
        name
        location
        address
        city
        phone
        price_in_cent
        strapiId
        slug
        thumbnail {
          childImageSharp {
            fixed(width: 300){
              ...GatsbyImageSharpFixed
          }
          }
        }
       
      }
    }
  }
`