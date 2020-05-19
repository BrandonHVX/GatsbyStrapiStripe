import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import Image from './image'
import bonbanner from '../images/banner-bonmaket.jpg'
import bonlogo from '../images/bonmaket-logo.png'

import {CartContext} from '../context/CartContext'

const Header = ({ siteTitle }) => {

  const {cart} = useContext(CartContext)
  console.log("Header.render cart", cart)

  return(
<nav class="navbar navbar-icon-top navbar-expand-lg p-2">
<div className="container">
  <a class="navbar-brand" href="#">
  <Link to="/">
  
   
  <img src={bonlogo} width={150}/> 
  </Link>
  
</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <ul class="navbar-nav ">
  <li class="nav-item">
  <h1 style={{ margin: 0, position: 'relative'}}>
    

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
              position: 'relative'
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
      </li>

    </ul>
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
 
    </ul>
    <ul class="navbar-nav ">
  
    <h1 style={{ margin: 0, position: 'relative'}}>
    

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
                      position: 'relative'
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
    </ul>
   
  </div>
  </div>
</nav>

  )
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header