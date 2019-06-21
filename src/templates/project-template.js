import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/SEO"

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
              title
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
      <p>{asset.data.title}</p>
    </li>
  ))
  return (
    <Layout>
      {/* <SEO title={props.pageContext.title} /> */}
      <div>
        <h1>Is tis working?</h1>
        <ul>{renderImageList}</ul>
      </div>
    </Layout>
  )
}

export default ProjectTemplate
