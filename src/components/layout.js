/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import '../sass/new-age.scss';
import './layout.css';

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
    <>
    
      <Header siteTitle={data.site.siteMetadata.title} />
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1960,
          
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, All rights reserved
          {` `}
          Bonmaket
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
