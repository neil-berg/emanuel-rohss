import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const CardWrapper = styled.div`
  margin: 0 auto;
  padding: 0;

  .image__title,
  .image__year,
  .image__materials,
  .image__dimensions,
  .image__view-location {
    margin: 0;
    padding: 0;
  }
  .image__title {
    color: blue;
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
