import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Scroll from '../components/Scroll';
import demo1 from "../images/bonmaket-moblie.jpg"
import BackgroundImage from 'gatsby-background-image'
import HeaderImage from "../components/HeaderImage"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {formatPrice} from '../utils/format'
import {fromProductSlugToUrl} from '../utils/products'
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




const IndexPage = ({data}) => (
  <Layout>
     
    <SEO title="Home" />
    <div className="head-image"><HeaderImage /></div>

  <section className="about">
  <div className="about-content">
        <div className="container">
        <div className="row h-100 justify-content center">
        <div className="col-lg-7 my-auto">
        <div className="section-heading text-center">
                    <h1>Welcome to Bonmaket</h1>
                    <p className="text-muted">Get More For Less!</p>
              <hr className="mb-3" />
                    
                    
                     </div>
                    <p className="text-center">   Bonmaket is the first and best online grocery store in
                      Haiti. Our user friendly website allows you to purchase
                      your groceries at the comfort of your home or office!</p>
                    
                 <div className="about-button">    <Scroll type="id" element="contact">
            <button href="#contact" className="btn btn-outline btn-xl">
       Start Shopping
            </button>
          </Scroll></div>
      
          </div>
          <div className="col-lg-5 my-5">
                  <div className="device-container">
                    <div className="device-mockup iphone6_plus portrait black">
                      <div className="device">
                        <div className="screen">
                          <img src={demo1} className="img-fluid" alt="" />
                        </div>
                        <div className="button"></div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
          </section>
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
    <section className="features">
            <div className="container">
              <div className="section-heading text-center mb-5">
                <h1>Why Bonmaket?</h1>
                <p className="text-muted">Get More For Less!</p>
                <hr class="mb-3" />
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8 my-auto">
                  <div className="image-container">
                    <img src={herobg} style={{ width: "100%" }} />
                  </div>
                </div>
                <div className="col-lg-8 col-md-12  my-auto ">
                  <div className="container-fluid mt-5">
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-6 col-md-8">
                        <div className="single-features mb-70">
                          <div className="features-icon">
                            <span>
                              <FontAwesomeIcon icon={faPhoneAlt} />
                            </span>
                          </div>
                          <div className="features-caption">
                            <h3>Fast Service </h3>
                            <p>
                              Many options to choose from! Pick-Up or Delivery
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-8">
                        <div className="single-features mb-70">
                          <div className="features-icon">
                            <span>
                              <FontAwesomeIcon icon={faSeedling} />
                            </span>
                          </div>
                          <div className="features-caption">
                            <h3>Always Fresh</h3>
                            <p>
                              Speedy delivery of fresh food from reputable
                              brands
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-xl-6 col-lg-6 col-md-8">
                        <div className="single-features mb-70">
                          <div className="features-icon">
                            <span>
                              <FontAwesomeIcon icon={faAward} />
                            </span>
                          </div>
                          <div className="features-caption">
                            <h3>Quality Products</h3>
                            <p>
                              Large selection of branded items to meet the needs
                              of our customers
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-8">
                        <div className="single-features mb-70">
                          <div className="features-icon">
                            <span>
                              <FontAwesomeIcon icon={faAward} />
                            </span>
                          </div>
                          <div className="features-caption">
                            <h3>Quality Products</h3>
                            <p>
                              Large selection of branded items to meet the needs
                              of our customers
                            </p>
                          </div>
                        </div>
                      </div>
                
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
    
  </Layout>
)

export default IndexPage


export const pageQuery = graphql`
  query MyQuery {
    allStrapiProduct {
      nodes {
        id
        description
        created_at
        name
        price_in_cent
        strapiId
        location
        address
        city
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