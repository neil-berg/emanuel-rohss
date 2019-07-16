import React from "react"
import styled from "styled-components"
import { animated, useTransition } from "react-spring"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const Modal = ({ showModal, setShowModal, modalDetails }) => {
  const backdropTransition = useTransition(showModal, null, {
    delay: 2,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const cardTransition = useTransition(showModal, null, {
    delay: 2,
    from: { opacity: 0, transform: `scale(0.6)` },
    enter: { opacity: 1, transform: `scale(1)` },
    leave: { opacity: 0, transform: `scale(0.6)` },
  })

  return (
    <Container>
      {backdropTransition.map(({ item, key, props: animation }) => {
        return (
          item && (
            <animated.div
              className="backdrop"
              key={key}
              style={animation}
              aria-modal="true"
              role="dialog"
              onClick={e => {
                if (e.target.classList.contains("backdrop")) {
                  setShowModal(false)
                }
              }}
            >
              {cardTransition.map(({ item, key, props: animation }) => {
                return (
                  item && (
                    <animated.div className="card" key={key} style={animation}>
                      <img
                        className="card__image"
                        src={modalDetails.src}
                        alt={modalDetails.title}
                      />
                      {/* <figure className="card__image">
                        <Img
                          alt={modalDetails.title}
                          fluid={modalDetails.fluid}
                        />
                      </figure> */}
                      <div>
                        <button
                          className="card__button"
                          onClick={() => setShowModal(false)}
                        >
                          {/* <img
                            className="card__button-svg"
                            src={closeLogo}
                            alt="Logo"
                          /> */}
                          <FontAwesomeIcon icon={faTimes} color="white" />
                        </button>
                      </div>
                      <div className="card__details">
                        <p className="card__details-title">
                          {modalDetails.title}
                        </p>
                        <p className="card__details-year">
                          {modalDetails.year}
                        </p>
                        <p className="card__details-materials">
                          {modalDetails.materials}
                        </p>
                        <p className="card__details-view">
                          {modalDetails.view}
                        </p>
                        <p className="card__details-location">
                          {modalDetails.location}
                        </p>
                        <p className="card__details-dimensions">
                          {modalDetails.dimensions}
                        </p>
                      </div>
                    </animated.div>
                  )
                )
              })}
            </animated.div>
          )
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  .backdrop {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.75);
    overflow: hidden;
  }

  .card {
    position: relative;
    z-index: 201;
    max-width: 960px;
  }

  .card__button {
    width: 40px;
    height: 40px;
    background: transparent;
    border: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -55px;
    right: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .card__image {
    display: block;
    width: auto;
    max-height: 80vh;
    position: relative;
  }

  .card__details {
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(153, 153, 153, 0.75);
    width: 100%;
    color: white;
    padding: 0.5em 1em;
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  .card__details-title,
  .card__details-year,
  .card__details-materials,
  .card__details-location,
  .card__details-view,
  .card__details-dimensions {
    margin: 0;
    padding: 0;
    font-size: 0.85em;
  }

  .card__details-title {
    font-weight: bold;
  }

  @media (hover: hover) {
    .card:hover {
      .card__details {
        opacity: 1;
      }
    }
  }
`

export default Modal
