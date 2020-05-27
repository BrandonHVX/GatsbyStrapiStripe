import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import LogoImage from './LogoImage'
import {CartContext} from '../context/CartContext'
import {Dropdown, DropdownButton, DropdownItem} from 'react-bootstrap';

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
          
           
            
            <div class="navi-left ml-2">


<Dropdown >
  <Dropdown.Toggle className="mb-1" variant="success" id="dropdown-basic">
  <i class="fas fa-phone-alt mr-2 "></i>Phone
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="tel:1-877-886-2538">🇺🇸  1-877-88MAKET</Dropdown.Item>
    <Dropdown.Item href="tel:+509-3210-5555">🇭🇹  +509-3210-5555</Dropdown.Item>
 
  </Dropdown.Menu>
</Dropdown>
 
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