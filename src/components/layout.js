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
  padding: 1rem 1rem 1rem calc(50px + 1rem);
  text-align: center;
  border-top: 1px lightgrey solid;

  a {
    text-decoration: none;
    color: blue;
  }
`

const Layout = ({ children }) => {
  return (
    <>
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
