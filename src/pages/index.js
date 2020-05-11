import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {formatPrice} from '../utils/format'
import {fromProductSlugToUrl} from '../utils/products'


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
    
      justifyContent: 'center',
     
    }}>
    {data.allStrapiProduct.nodes.map(product => (
      <Link to={fromProductSlugToUrl(product.slug)}>
     <div className="card m-3" style={{width:300}} >
 <Img fixed={product.thumbnail.childImageSharp.fixed} />    
  <div className="card-body">
       <h5 className="card-title">{product.name}</h5>
       <p className="card-text">{product.description}</p>
       <button className="btn btn-primary">  {formatPrice(product.price_in_cent)}</button>
     </div>
   </div>
     </Link>
          
           
           
      ))}
      </div>
    <Link to="/page-2/">Go to page 2</Link>
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
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`