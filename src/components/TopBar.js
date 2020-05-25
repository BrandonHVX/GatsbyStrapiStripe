import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import LogoImage from './LogoImage'
import {CartContext} from '../context/CartContext'

const Header = ({ siteTitle }) => {

  const {cart} = useContext(CartContext)
  console.log("Header.render cart", cart)

  return(
      <header
        style={{
          background: 'linear-gradient(to right, #cb0505 0%,#f4821f 100%)'

        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 640,
           
          }}
        >
          <h1 style={{ margin: 0, position: 'relative'}}>
          
           
            
            <div class="navi-left">

 

 
<div class="navi-links-left">
  <a href="tel:1-877-886-2538" class='fas fa-phone-alt' target="_blank"> </a>



</div>
</div>
            
            
            
            
         
      

       
         
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
        
                  
            
                    }}
                  >
<div class="navi">

 

 
<div class="navi-links">
  <a href="https://www.instagram.com/bonmaket/" class='fab fa-instagram' target="_blank"> </a>
  <a  href="mailto:info@bonmaket.com?Subject=Customer Support" class='fas fa-envelope' target="_blank"></a>
  

 
</div>
</div>
                  </div>

                </div>
          
          </h1>
          
        </div>
      </header>
  )
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header