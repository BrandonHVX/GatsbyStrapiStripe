import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'
import Scroll from '../components/Scroll';
import demo1 from "../images/bonmaket-moblie.jpg"
import BackgroundImage from 'gatsby-background-image'
import Header from "../components/header"
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

  <Image/>
  
  <header class="mt-5">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-7 my-auto">
                  <div className="section-heading text-center">
                    <h1>Welcome to Bonmaket</h1>
                    <p className="text-muted">Get More For Less!</p>
                    <hr class="mb-3" />
                  </div>
                  <div className="header-content mx-auto">
                    <h2 className="mb-5">
                      Bonmaket is the first and best online grocery store in
                      Haiti. Our user friendly website allows you to purchase
                      your groceries at the comfort of your home or office!
                    </h2>
                    <Scroll type="id" element="download">
                      <a href="#download" className="btn btn-outline btn-xl">
                        Start Shopping
                      </a>
                    </Scroll>
                  </div>
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
          </header>
          <section className="download  text-white text-center" id="download">
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <h2 className="section-heading">
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
          <section id="features">
            <div className="section-heading text-center">
              <h1>Select Your Cart!</h1>
              <p className="text-muted">Our Products</p>
              <hr class="mb-3" />
            </div>

            <div class='products'>
            {data.allStrapiProduct.nodes.map(product => (
       <Link to={fromProductSlugToUrl(product.slug)}>


   
    <div class="blog-slider">
   <div class="blog-slider__wrp swiper-wrapper">
     <div class="blog-slider__item swiper-slide">
       <div class="blog-slider__img">
        
        <Img class="img" fixed={product.thumbnail.childImageSharp.fixed} /> 
       </div>
       <div class="blog-slider__content">

         <div class="blog-slider__title">{product.name}</div>
         <div class="blog-slider__text">{product.description}</div>
         <button class="btn-products">View Cart</button>
       </div>
     </div>
   </div>   <div class="blog-slider__pagination"></div>
 </div>

      </Link>
       
      ))}</div>
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
                    <div className="row">
                      <div class="col-xl-6 col-lg-6 col-md-8">
                        <div class="single-features mb-70">
                          <div class="features-icon">
                            <span>
                              <FontAwesomeIcon icon={faPhoneAlt} />
                            </span>
                          </div>
                          <div class="features-caption">
                            <h3>Fast Service </h3>
                            <p>
                              Many options to choose from! Pick-Up or Delivery
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-8">
                        <div class="single-features mb-70">
                          <div class="features-icon">
                            <span>
                              <FontAwesomeIcon icon={faSeedling} />
                            </span>
                          </div>
                          <div class="features-caption">
                            <h3>Always Fresh</h3>
                            <p>
                              Speedy delivery of fresh food from reputable
                              brands
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div class="col-xl-6 col-lg-6 col-md-8">
                        <div class="single-features mb-70">
                          <div class="features-icon">
                            <span>
                              <FontAwesomeIcon icon={faAward} />
                            </span>
                          </div>
                          <div class="features-caption">
                            <h3>Quality Products</h3>
                            <p>
                              Large selection of branded items to meet the needs
                              of our customers
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-8">
                        <div class="single-features mb-70">
                          <div class="features-icon">
                            <span>
                              <FontAwesomeIcon icon={faUserTie} />
                            </span>
                          </div>
                          <div class="features-caption">
                            <h3>Customer Support</h3>
                            <p>
                              Exceptional customer service and always meeting
                              delivery expectations.
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
        slug
        thumbnail {
          childImageSharp {
            fixed(width: 300){
              ...GatsbyImageSharpFixed
          }
          }
        }
        item_image_one {
          childImageSharp {
            fixed(width: 300, height: 300){
                  ...GatsbyImageSharpFixed
              }
          }
      }
      }
    }
  }
`