import React from "react"
import styled from "styled-components"
import { animated, useTransition } from "react-spring"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import propTypes from "prop-types"

import Carousel from "./Carousel"

const Modal = ({ showModal, setShowModal, modalImages }) => {
  const transition = useTransition(showModal, null, {
    delay: 2,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <Container>
      {transition.map(({ item, key, props: animation }) => {
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
              {transition.map(({ item, key, props: animation }) => {
                return (
                  item && (
                    <animated.div className="card" key={key} style={animation}>
                      <Carousel key={key} modalImages={modalImages} />
                      <div>
                        <button
                          className="card__button"
                          onClick={() => setShowModal(false)}
                        >
                          <FontAwesomeIcon icon={faTimes} color="white" />
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
    background-color: rgba(0, 0, 0, 0.85);
    overflow: hidden;
  }

  .card {
    position: relative;
    z-index: 201;
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
`

Modal.propTypes = {
  showModal: propTypes.bool.isRequired,
  setShowModal: propTypes.func.isRequired,
  modalImages: propTypes.array.isRequired,
}

export default Modal
