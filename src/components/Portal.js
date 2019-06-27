import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import "../styles/portal.css"

// Use a ternary operator to make sure that the document object is defined
const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null

const Portal = ({ children }) => {
  const el =
    typeof document !== `undefined` ? document.createElement("div") : null

  useEffect(() => {
    portalRoot.appendChild(el)
    el.classList.add("portal-container")
  }, [])

  useEffect(() => {
    return () => {
      portalRoot.removeChild(el)
    }
  })

  if (el) {
    return ReactDOM.createPortal(children, el)
  } else {
    return null
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Portal
