import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {formatPrice} from '../utils/format'
import {fromProductSlugToUrl} from '../utils/products'




const masthead = {
  position: 'relative',
  width: '100%',
height: '100vh',
backgroundColor: 'blue',
  backgroundImage: `url(${Image})`,
 
}




const ProductsPage= ({data}) => (
  <Layout>
     
    <SEO title="Home" />
<BackgroundImage>

</BackgroundImage>
<div className="products-page">
          <section className="banner  text-white text-center" id="download">
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <h2 className="section-heading text-white">
                    Choose your very best pricing option.
                  </h2>
                  <p></p>
                  <div className="badges">
                    <a className="badge-link" href="/#"></a>
                    <a className="badge-link" href="/#"></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="products" id="contact">
  <div className="products-content">
        <div className="container">
   
    
        <div className="section-heading text-center">
                    <h1>Select Your Cart!</h1>
                    <p className="text-muted">Our Products</p>
              <hr className="mb-3" />
                    
                    
                     </div>
                   
                     {data.allStrapiProduct.nodes.slice(2,3).map(product => (
       <Link to={fromProductSlugToUrl(product.slug)}>


   
    <div className="product-slider">
   <div className="product-slider__wrp swiper-wrapper">
     <div className="product-slider__item swiper-slide">
       <div className="product-slider__img">
        
        <Img className="img" fixed={product.thumbnail.childImageSharp.fixed} /> 
       </div>
       <div className="product-slider__content">

         <div className="product-slider__title">{product.name}</div>
         <div className="product-slider__text">{product.description}</div>
         <button className="btn">View Cart</button>
       </div>
     </div>
   </div>   <div className="product-slider__pagination"></div>
 </div>

      </Link>
       
      ))}   
                       {data.allStrapiProduct.nodes.slice(1,2).map(product => (
       <Link to={fromProductSlugToUrl(product.slug)}>


   
    <div className="product-slider">
   <div className="product-slider__wrp swiper-wrapper">
     <div className="product-slider__item swiper-slide">
       <div className="product-slider__img">
        
        <Img className="img" fixed={product.thumbnail.childImageSharp.fixed} /> 
       </div>
       <div className="product-slider__content">

         <div className="product-slider__title">{product.name}</div>
         <div className="product-slider__text">{product.description}</div>
         <button className="btn">View Cart</button>
       </div>
     </div>
   </div>   <div className="product-slider__pagination"></div>
 </div>

      </Link>
       
      ))}  
                       {data.allStrapiProduct.nodes.slice(0,1).map(product => (
       <Link to={fromProductSlugToUrl(product.slug)}>


   
    <div className="product-slider">
   <div className="product-slider__wrp swiper-wrapper">
     <div className="product-slider__item swiper-slide">
       <div className="product-slider__img">
        
        <Img className="img" fixed={product.thumbnail.childImageSharp.fixed} /> 
       </div>
       <div className="product-slider__content">

         <div className="product-slider__title">{product.name}</div>
         <div className="product-slider__text">{product.description}</div>
         <button className="btn">View Cart</button>
       </div>
     </div>
   </div>   <div className="product-slider__pagination"></div>
 </div>

      </Link>
       
      ))}  
                  
                 
   
          
        </div>
      </div>
      <div className="overlay"></div>
          </section>

    
    </div>
  </Layout>
)

export default ProductsPage


export const pageQuery = graphql`
  query ProductsQuery {
    allStrapiProduct {
      nodes {
        id
        description
        created_at
        name
        price_in_cent
        strapiId
        slug
        thumbnail {
          childImageSharp {
            fixed(width: 300){
                 base64
    width
    height
    src
    srcSet
          }
          }
        }
       
      }
    }
  }
  
`