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

const ImageCard = ({ image }) => (
  <CardWrapper>
    <Img
      alt={image.data.image_title}
      fluid={image.data.attachment.localFiles[0].childImageSharp.fluid}
      style={{ cursor: "zoom-in" }}
    />
    <p className="image__title">{image.data.image_title}</p>
    <p className="image__year">{image.data.year}</p>
    <p className="image__materials">{image.data.materials}</p>
    <p className="image__dimensions">{image.data.dimensions}</p>
    {image.data.view && image.data.location && (
      <p className="image__view-location">
        {image.data.view} | {image.data.location}
      </p>
    )}
  </CardWrapper>
)

export default ImageCard
