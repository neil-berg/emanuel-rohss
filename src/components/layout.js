import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Sidebar from "./Sidebar"
import "../styles/layout.css"

const Footer = styled.footer`
  margin: 0 auto;
  width: 100%;
  padding: 2.5rem 0.5rem 0.5rem calc(50px + 1rem);
  text-align: center;
  font-size: 0.85em;

  a {
    text-decoration: none;
    color: blue;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
      <Footer>
        site by{" "}
        <a
          href="https://neilberg.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          neil berg
        </a>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
