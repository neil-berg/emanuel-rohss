import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

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

const ProjectTemplate = props => {
  const assets = props.data.allAirtable.nodes[0].data.Assets

  const renderImageList = assets.map((asset, i) => (
    <li key={i}>
      <Img
        alt="asset.data.title"
        fluid={asset.data.attachment.localFiles[0].childImageSharp.fluid}
      />
      <p>{asset.data.asset_title}</p>
    </li>
  ))
  return (
    <Layout>
      <SEO
        title={props.pageContext.projectTitle}
        description="a simple description"
      />
      <h1>{props.pageContext.projectTitle}</h1>
      <ul>{renderImageList}</ul>
    </Layout>
  )
}

export default ProjectTemplate
