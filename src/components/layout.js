/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import LogoImage from './LogoImage'
import '../sass/new-age.scss';
import './layout.css';

import styled, { keyframes } from 'styled-components';
import { fadeIn} from 'react-animations';
const FadeAnimation = keyframes`${fadeIn}`;
const FadeDiv = styled.div`
  animation: 1s ${FadeAnimation};
`;
const shop = {
  padding: '10px 20px 40px 20px'
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <FadeDiv>
    <>
    
   <Navbar/>
    
      <div
        style={{
     
          maxWidth: 1960,
        }}
      >
 
    
        <main>
        
{children}</main>
       
      </div> <footer>
          © {new Date().getFullYear()}, All rights reserved
          {` `}
          Bonmaket
        </footer>
    </>
    </FadeDiv>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
