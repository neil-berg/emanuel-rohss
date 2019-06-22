import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Sidebar from "./Sidebar"
import "../styles/layout.css"

const Footer = styled.footer`
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem 0 calc(50px + 1rem);
  text-align: center;
`

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
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Sidebar />
      <div
        style={{
          margin: `0 auto`,
          padding: `0`,
        }}
      >
        <main>{children}</main>
        <Footer>
          site by <a href="https://neilberg.dev">neil berg</a>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
