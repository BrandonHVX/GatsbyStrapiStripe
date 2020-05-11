import React, {useState, useContext} from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import { CartContext } from "../context/CartContext"
import Layout from "../components/layout"
import {formatPrice} from '../utils/format'


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





const ProductTemplate = ({data}) => {

    const [qty, setQty] = useState(1)
    const { addToCart } = useContext(CartContext)

    console.log("ProductTemplate.render data", data)
    return(
        <Layout>
            <div>

<div style={image}> <Img fixed={data.strapiProduct.thumbnail.childImageSharp.fixed} /></div>
           

<div className="product-details">
            <h2>{data.strapiProduct.name}</h2>
            <p>{data.strapiProduct.description}</p>
            <p>Price: {formatPrice(data.strapiProduct.price_in_cent)}</p>
            <input 
                type="number" 
                value={qty} 
                onChange={(event) => setQty(event.target.value)}
            />
            <button 
                onClick={() => addToCart(data.strapiProduct, qty)}
                style={{fontSize: '20px', padding: '24px', borderRadius: '2px'}}>
                Add To Cart
            </button>
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
        }
    }
`