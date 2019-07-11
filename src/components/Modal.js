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
                      {/* <button className="card__button">
                        <FontAwesomeIcon
                          icon={faTimes}
                          color="black"
                          size="2x"
                          onClick={() => setShowModal(false)}
                        />
                      </button> */}
                      <img
                        className="card__image"
                        src={modalDetails.src}
                        alt={modalDetails.alt}
                      />
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
    background: white;
    border-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card__image {
    display: block;
    width: auto;
    max-height: 90vh;
  }
`

export default Modal
