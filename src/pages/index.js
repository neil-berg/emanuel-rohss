import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allAirtable(
      sort: { order: ASC, fields: data___project_order }
      filter: { table: { eq: "Projects" } }
    ) {
      nodes {
        data {
          cover_photo {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          project_title
          press_release {
            filename
            id
            url
          }
          slug
        }
        recordId
      }
    }
  }
`

const ProjectWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 1rem 1.5rem 1rem calc(50px + 1.5rem);

  .project-list {
    max-width: 960px;
    margin: 0 auto;
    padding: 0;
  }

  .project-item {
    margin-bottom: 2.5rem;
    padding: 0;
  }

  .project-item__link {
    text-decoration: none;
    padding: 0;
    color: inherit;
  }

  .project-item__title {
    padding: 0;
    margin: 0 0 0.75rem 0;
    font-size: 1.5em;
    font-weight: normal;
    z-index: 1000;
  }
`

const IndexPage = ({ data }) => {
  const renderCoverPhotoList = data.allAirtable.nodes.map(node => (
    <li className="project-item" key={node.recordId}>
      <Link className="project-item__link" to={`/${node.data.slug}`}>
        <h2 className="project-item__title">{node.data.project_title}</h2>
        <Img
          alt={node.data.project_title}
          fluid={node.data.cover_photo.localFiles[0].childImageSharp.fluid}
        />
      </Link>
    </li>
  ))
  return (
    <Layout>
      <SEO title="Home" />
      <ProjectWrapper>
        <ul className="project-list">{renderCoverPhotoList}</ul>
      </ProjectWrapper>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allAirtable: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }),
}

export default IndexPage
