import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import audioFile from "../assets/earthsong.mp3"

const Earthsong = () => {
  return (
    <Layout>
      <SEO title="Earthsong" />
      <StyledLink to="/">
        <FontAwesomeIcon icon={faLongArrowAltLeft} color="black" />
        <span>All projects</span>
      </StyledLink>
      <StyledEarthsong>
        <figure>
          <figcaption>Listen to Earth Song</figcaption>
          <audio autoplay loop controls src={audioFile}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </StyledEarthsong>
    </Layout>
  )
}

const StyledLink = styled(Link)`
  position: absolute;
  top: 20px;
  left: 80px;
  display: flex;
  align-items: center;
  width: 120px;
  text-decoration: none;

  span {
    color: black;
    padding-left: 0.25rem;
  }
`

const StyledEarthsong = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
  }

  figcaption {
    margin-bottom: 20px;
  }

  audio {
    width: 250px;
  }

  @media only screen and (min-width: 770px) {
    audio {
      width: 300px;
    }
  }
`

export default Earthsong
