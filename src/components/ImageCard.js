import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const CardWrapper = styled.article`
  margin: 0 auto;
  padding: 0 0 2.25rem 0;
  line-height: 1.1em;
  height: 100%;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;

  .details__title,
  .details__year,
  .details__materials,
  .details__dimensions,
  .details__view-location {
    margin: 0;
    padding: 0;
    color: #6d6e70;
    font-size: 0.85em;
  }
  .details__title {
    color: black;
    padding-top: 0.5rem;
    font-style: italic;
  }
`

const ImageCard = ({ image }) => (
  <CardWrapper>
    <Img
      alt={image.data.image_title}
      fluid={image.data.attachment.localFiles[0].childImageSharp.fluid}
      style={{ cursor: "zoom-in" }}
    />
    <section className="details">
      <p className="details__title">{image.data.image_title}</p>
      <p className="details__year">{image.data.year}</p>
      <p className="details__materials">{image.data.materials}</p>
      <p className="details__dimensions">{image.data.dimensions}</p>
      {image.data.view && image.data.location && (
        <p className="details__view-location">
          {image.data.view} | {image.data.location}
        </p>
      )}
    </section>
  </CardWrapper>
)

export default ImageCard
