import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

const CardWrapper = styled.li`
  padding: 0 0 2.25rem 0;
  line-height: 1.1em;
  height: 100%; // DROP IF NO GRID

  .image {
    cursor: zoom-in;
  }

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
      className="image"
      alt={image.data.image_title}
      fluid={image.data.attachment.localFiles[0].childImageSharp.fluid}
    />
    <div className="details">
      <p className="details__title">{image.data.image_title}</p>
      <p className="details__year">{image.data.year}</p>
      <p className="details__materials">{image.data.materials}</p>
      <p className="details__dimensions">{image.data.dimensions}</p>
      {image.data.view && image.data.location && (
        <p className="details__view-location">
          {image.data.view} | {image.data.location}
        </p>
      )}
    </div>
  </CardWrapper>
)

ImageCard.propTypes = {
  image: PropTypes.shape({
    data: PropTypes.shape({
      attachment: PropTypes.object.isRequired,
      dimensions: PropTypes.string,
      image_title: PropTypes.string,
      location: PropTypes.string,
      materials: PropTypes.string,
      view: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default ImageCard
