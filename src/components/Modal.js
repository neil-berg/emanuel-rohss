import React from "react"
import styled from "styled-components"
import { animated, useTransition } from "react-spring"

import closeLogo from "../assets/cancel.svg"

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
                        alt={modalDetails.alt}
                      />
                      <div>
                        <button
                          className="card__button"
                          onClick={() => setShowModal(false)}
                        >
                          <img
                            className="card__button-svg"
                            src={closeLogo}
                            alt="Logo"
                          />
                        </button>
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
    background: #f7f8fa;
    border-color: #f7f8fa;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -55px;
    right: 0.5rem;
  }

  .card__button-svg {
    width: 15px;
    height: 15px;
  }

  .card__image {
    display: block;
    width: auto;
    max-height: 80vh;
    position: relative;
  }
`

export default Modal
