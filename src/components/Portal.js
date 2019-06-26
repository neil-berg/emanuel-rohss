import React, { useEffect } from "react"
import ReactDOM from "react-dom"

import "../styles/portal.css"

//const portalRoot = document.getElementById("portal")

// Use a ternary operator to make sure that the document object is defined
const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null

// const Portal = ({ children }) => {
//   const el = document.createElement("div")

//   useEffect(() => {
//     portalRoot.appendChild(el)
//     el.classList.add("portal-container")
//   }, [])

//   useEffect(() => {
//     return () => {
//       portalRoot.removeChild(el)
//     }
//   })

//   // return ReactDOM.createPortal(children, el)
//   return ReactDOM.createPortal(children, el)
// }

class Portal extends React.Component {
  constructor() {
    super()
    //this.el = document.createElement("div")
    this.el =
      typeof document !== `undefined` ? document.createElement("div") : null
  }

  componentDidMount() {
    portalRoot.appendChild(this.el)
    this.el.classList.add("portal-container")
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props
    // return ReactDOM.createPortal(children, this.el)
    if (this.el) {
      return ReactDOM.createPortal(children, this.el)
    } else {
      return null
    }
  }
}

export default Portal
