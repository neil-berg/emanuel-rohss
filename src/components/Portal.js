import React, { useEffect } from "react"
import ReactDOM from "react-dom"

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

  // return ReactDOM.createPortal(children, el)
  if (el) {
    return ReactDOM.createPortal(children, el)
  } else {
    return null
  }
}

// class Portal extends React.Component {
//   constructor() {
//     super()
//     this.el =
//       typeof document !== `undefined` ? document.createElement("div") : null
//   }

//   componentDidMount() {
//     portalRoot.appendChild(this.el)
//     this.el.classList.add("portal-container")
//   }

//   componentWillUnmount() {
//     portalRoot.removeChild(this.el)
//   }

//   render() {
//     const { children } = this.props
//     if (this.el) {
//       return ReactDOM.createPortal(children, this.el)
//     } else {
//       return null
//     }
//   }
// }

export default Portal
