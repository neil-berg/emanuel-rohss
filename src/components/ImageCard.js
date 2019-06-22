import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const CardWrapper = styled.div`
  margin: 0 auto;
  padding: 0 0 2.25rem 0;
  line-height: 1.1em;

  .image__title,
  .image__year,
  .image__materials,
  .image__dimensions,
  .image__view-location {
    margin: 0;
    padding: 0;
    color: #6d6e70;
    font-size: 0.85em;
  }
  .image__title {
    color: black;
    padding-top: 0.5rem;
  }
`

const ImageCard = ({ asset }) => (
  <CardWrapper>
    <Img
      alt="asset.data.title"
      fluid={asset.data.attachment.localFiles[0].childImageSharp.fluid}
    />
    <p className="image__title">{asset.data.asset_title}</p>
    <p className="image__year">{asset.data.year}</p>
    <p className="image__materials">{asset.data.materials}</p>
    <p className="image__dimensions">{asset.data.dimensions}</p>
    {asset.data.view && asset.data.location && (
      <p className="image__view-location">
        {asset.data.view} | {asset.data.location}
      </p>
    )}
  </CardWrapper>
)

export default ImageCard
