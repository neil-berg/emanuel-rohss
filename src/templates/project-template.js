import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ImageCard from "../components/ImageCard"

export const query = graphql`
  query($slug: String!) {
    allAirtable(filter: { data: { slug: { eq: $slug } } }) {
      nodes {
        data {
          Assets {
            data {
              view
              year(formatString: "YYYY")
              dimensions
              location
              materials
              asset_title
              attachment {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const TemplateWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 1rem 1.5rem 1rem calc(50px + 1.5rem);
  max-width: calc(1000px + 1.5rem + 50px + 1.5rem);

  .project__title {
    padding-bottom: 0.5rem;
    border-bottom: 1px lightgrey solid;
  }

  .project__asset-item:first-child {
    margin-top: 1rem;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .pagination__previous,
  .pagination__next {
    display: flex;
    align-items: center;
  }

  .pagination__previous-link,
  .pagination__next-link {
    color: inherit;
    text-decoration: none;
  }

  .pagination__previous-text {
    padding-left: 0.5rem;
  }

  .pagination__next-text {
    padding-right: 0.5rem;
  }
`

const ProjectTemplate = props => {
  const assets = props.data.allAirtable.nodes[0].data.Assets

  const renderImageList = assets.map((asset, i) => (
    <li className="project__asset-item" key={i}>
      <ImageCard asset={asset} />
    </li>
  ))
  return (
    <Layout>
      <SEO
        title={props.pageContext.projectTitle}
        description="a simple description"
      />
      <TemplateWrapper>
        <Link to="/">Return to home page</Link>
        <h1 className="project__title">{props.pageContext.projectTitle}</h1>
        <ul className="project__asset-list">{renderImageList}</ul>
        <div className="pagination">
          {props.pageContext.previous && (
            <div className="pagination__previous">
              <Link
                className="pagination__previous-link"
                to={props.pageContext.previous.slug}
              >
                <FontAwesomeIcon
                  className="pagination__previous-icon"
                  icon={faLongArrowAltLeft}
                />
                <span className="pagination__previous-text">
                  {props.pageContext.previous.project_title}
                </span>
              </Link>
            </div>
          )}
          {!props.pageContext.previous && <div />}
          {props.pageContext.next && (
            <div className="pagination__next">
              <Link
                className="pagination__next-link"
                to={props.pageContext.next.slug}
              >
                <span className="pagination__next-text">
                  {props.pageContext.next.project_title}
                </span>
                <FontAwesomeIcon
                  className="pagination__next-icon"
                  icon={faLongArrowAltRight}
                />
              </Link>
            </div>
          )}
        </div>
      </TemplateWrapper>
    </Layout>
  )
}

export default ProjectTemplate
