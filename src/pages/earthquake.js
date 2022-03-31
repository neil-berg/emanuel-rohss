import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Earthquake = () => {
  return (
    <Layout>
      <SEO title="Earthquake" />
      <StyledLink to="/">
        <FontAwesomeIcon icon={faLongArrowAltLeft} color="black" />
        <span>All projects</span>
      </StyledLink>
      <StyledEarthquake>
        <figure>
          <figcaption>Listen to the earthquake</figcaption>
          <audio
            autoplay
            loop
            controls
            src="https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav"
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </StyledEarthquake>
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

const StyledEarthquake = styled.div`
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

export default Earthquake
