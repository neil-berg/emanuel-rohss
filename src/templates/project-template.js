import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

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
  padding: 0 1.5rem 0 calc(50px + 1.5rem);
`

const ProjectTemplate = props => {
  const assets = props.data.allAirtable.nodes[0].data.Assets

  const renderImageList = assets.map((asset, i) => (
    <li key={i}>
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
        <h1>{props.pageContext.projectTitle}</h1>
        <ul style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {renderImageList}
        </ul>
      </TemplateWrapper>
    </Layout>
  )
}

export default ProjectTemplate
