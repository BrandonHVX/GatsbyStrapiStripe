import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import LogoImage from './LogoImage'
import {CartContext} from '../context/CartContext'

const Main = ({ siteTitle }) => {

  const {cart} = useContext(CartContext)
  console.log("Header.render cart", cart)

  return(
      <header
        style={{
 
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 640,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0, position: 'relative'}}>
            <Link
              to="/"
              style={{
                color: `red`,
                textDecoration: `none`,
              }}
            >
            <div style={{width: '100px'}}><LogoImage /></div>
      
            </Link>

            {cart && cart.length > 0 &&
              <Link to="/cart">
                <div
                  style={{
                    position: 'absolute',
                    right: '0',
                    top: 0
                  }}
                >
                  <div 
                    style={{
                      position: 'relative',
                      alignContent: 'center',
                      marginTop: '20px'
            
                    }}
                  >
                    🛒
                    <span style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      backgroundColor: 'white',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      display: 'inline-block',
                      lineHeight: '20px',
                      position: 'absolute',
                      right: '20px',
                      top: '30px'
                    }}>
                      {cart.reduce((counter, product) => {
                        return counter + product.qty
                      }, 0)}
                    </span>
                  </div>

                </div>
              </Link>
            }
          </h1>
          
        </div>
      </header>
  )
  
}



export default Main