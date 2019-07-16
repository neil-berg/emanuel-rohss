import React from "react"
import ReactSwipe from "react-swipe"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

const Carousel = ({ modalImages }) => {
  let reactSwipeEl

  const images = modalImages.map(image => (
    <div className="carousel__image-container">
      <img
        className="carousel__image"
        srcSet={image.fluid.srcSet}
        alt={image.title}
        key={image.id}
      />
    </div>
  ))

  return (
    <CarouselContainer>
      <button className="carousel__button" onClick={() => reactSwipeEl.prev()}>
        <FontAwesomeIcon
          className="carousel__button-icon"
          icon={faChevronLeft}
        />
      </button>
      <ReactSwipe
        className="carousel"
        swipeOptions={{}}
        childCount={images.length}
        ref={el => (reactSwipeEl = el)}
      >
        {images}
      </ReactSwipe>
      <button className="carousel__button" onClick={() => reactSwipeEl.next()}>
        <FontAwesomeIcon
          className="carousel__button-icon"
          icon={faChevronRight}
        />
      </button>
    </CarouselContainer>
  )
}

const CarouselContainer = styled.div`
  height: 60vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //border: 1px yellow solid;

  .carousel__button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: transparent;
    margin: 0.5rem;
  }

  .carousel__button-icon {
    color: white;
    font-size: 1.75rem;
  }

  .carousel__image-container {
    display: flex;
    height: 100vh;
    align-items: center;
  }

  .carousel__image {
    display: block;
    //max-height: 600px;
    max-height: 60vh;
    width: auto;
    margin: 0 auto;
  }

  @media screen and (min-width: 600px) {
    height: 80vh;

    .carousel__image {
      max-height: 80vh;
    }
  }
`

export default Carousel
