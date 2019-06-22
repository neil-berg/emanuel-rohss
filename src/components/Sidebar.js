import React, { useState } from "react"
import styled from "styled-components"

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;

  .content {
    flex: 1;
    background: papayawhip;
    max-width: ${props => (props.isSidebarOpen ? `100%` : `0px`)};
    min-width: ${props => (props.isSidebarOpen ? `calc(100vw - 50px)` : `0px`)};
    overflow: hidden;
    opacity: ${props => (props.isSidebarOpen ? "1" : "0")};
    transition: all 0.3s linear;
  }

  .clickbar {
    background: #002b72;
    color: white;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clickbar__text {
    writing-mode: vertical-rl;
    text-orientation: upright;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 1.35em;
  }
`

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <SidebarWrapper isSidebarOpen={isSidebarOpen}>
      <div className="content">
        <p>Email me</p>
        <p>Call me</p>
        <h2>CV</h2>
        <p>BS Art</p>
        <p>MFA Painting</p>
        <p>{isSidebarOpen ? "open" : "closed"}</p>
      </div>
      <div
        className="clickbar"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <p className="clickbar__text">Emanuel Röhss</p>
      </div>
    </SidebarWrapper>
  )
}

export default Sidebar
