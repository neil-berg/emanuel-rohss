import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      sort: { order: ASC, fields: data___order }
    ) {
      nodes {
        data {
          slug
          press_release {
            filename
          }
          cover_photo {
            url
          }
          project_title
        }
        recordId
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {data.allAirtable.nodes.map(node => (
        <li key={node.recordId}>
          <Link to={node.data.slug}>
            <p>{node.data.project_title}</p>
            <img
              style={{ width: "100px" }}
              src={node.data.cover_photo[0].url}
            />
          </Link>
        </li>
      ))}
    </ul>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
