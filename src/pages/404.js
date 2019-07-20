import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allFile(
      filter: {
        sourceInstanceName: { eq: "assets" }
        name: { eq: "error-404" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundContainer>
      <Link className="home-link" to="/">
        <FontAwesomeIcon icon={faLongArrowAltLeft} color="black" />
        <span className="home-link__text">All projects</span>
      </Link>
      <div className="image-card">
        <Img
          alt="Not found"
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
        />
        <p className="not-found-text">Page not found</p>
      </div>
    </NotFoundContainer>
  </Layout>
)

const NotFoundContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 1rem 1.5rem 1rem calc(50px + 1.5rem);
  max-width: 960px;

  .home-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-bottom: 1rem;
  }

  .home-link__text {
    color: black;
    padding-left: 0.25rem;
  }

  .image-card {
    max-width: 600px;
    margin: 0 auto;
  }

  .not-found-text {
    margin: 0 auto;
    text-align: center;
    padding-top: 1rem;
    font-size: 2em;
  }
`

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }),
}

export default NotFoundPage
