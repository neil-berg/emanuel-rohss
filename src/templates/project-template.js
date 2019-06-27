import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ImageCard from "../components/ImageCard"
import VideoCard from "../components/VideoCard"
import Portal from "../components/Portal"

export const query = graphql`
  query($slug: String!) {
    allAirtable(filter: { data: { slug: { eq: $slug } } }) {
      nodes {
        data {
          Images {
            data {
              dimensions
              view
              image_title
              location
              materials
              attachment {
                localFiles {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
          Videos {
            data {
              attachment {
                localFiles {
                  url
                }
              }
              video_title
              year(formatString: "YYYY")
              materials
              length
              dimensions
            }
          }
        }
      }
    }
  }
`

const TemplateWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 1rem 1.5rem 1rem calc(50px + 1.5rem);
  max-width: calc(1000px + 1.5rem + 50px + 1.5rem);

  .home-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-bottom: 1rem;
  }

  .home-link__text {
    color: black;
    padding-left: 0.25rem;
  }

  .header {
    padding: 0.5rem 0;
    border-bottom: 1px lightgrey solid;
  }

  .header__title {
    font-weight: normal;
    font-size: 1.5em;
    padding: 0 0 1rem 0;
    margin: 0;
  }

  .header__press-release {
    color: blue;
    text-decoration: none;
  }

  .image-list {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 2rem;
    justify-content: center;
    // align-items: center;
  }

  // .image-item:first-child {
  //   margin-top: 1rem;
  // }

  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .pagination__previous,
  .pagination__next {
    display: flex;
    align-items: center;
  }

  .pagination__previous-link,
  .pagination__next-link {
    color: inherit;
    text-decoration: none;
  }

  .pagination__previous-text {
    padding-left: 0.5rem;
  }

  .pagination__next-text {
    padding-right: 0.5rem;
  }
`

const ProjectTemplate = props => {
  // Local state for modals on any project page
  // modalSrc is the src attribute for a clicked image
  // which is passed as a child img to <Modal />
  // locationY tracks how far down the user has scrolled
  // so that upon closing the modal, the user is returned
  // to the last place they scrolled to. This is necessary
  // since the window scrolls to the top (0,0) and freezes
  // there while the modal is shown in fullscreen mode
  const [showModal, setShowModal] = useState(false)
  const [modalSrc, setModalSrc] = useState(null)
  const [locationY, setLocationY] = useState(0)

  const handleImageClick = e => {
    if (e.target.nodeName === "IMG") {
      setShowModal(true)
      setModalSrc(e.target.src)
      setLocationY(window.scrollY)
      window.scrollTo(0, 0)
      document.body.classList.add("modal-open")
    }
  }

  const handleCloseClick = () => {
    setShowModal(false)
    window.scrollTo(0, locationY)
    document.body.classList.remove("modal-open")
  }

  // Extract image and video nodes from Airtable
  // Videos may be null for a given project
  const images = props.data.allAirtable.nodes[0].data.Images
  const videos = props.data.allAirtable.nodes[0].data.Videos

  const renderImageList = images.map((image, i) => (
    <li className="image-item" key={i}>
      <ImageCard image={image} />
    </li>
  ))

  return (
    <>
      <Layout>
        <SEO
          title={props.pageContext.projectTitle}
          description="a simple description"
        />
        <TemplateWrapper>
          <Link className="home-link" to="/">
            <FontAwesomeIcon icon={faLongArrowAltLeft} color="black" />
            <span className="home-link__text">All projects</span>
          </Link>
          <header className="header">
            <h1 className="header__title">{props.pageContext.projectTitle}</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              dolores ratione, debitis perspiciatis ducimus neque velit iusto
              sed quisquam quae molestiae earum saepe alias. Exercitationem modi
              deserunt necessitatibus eligendi animi!Officia consequuntur
              consectetur nesciunt id quod aspernatur aut porro voluptatem
              voluptates expedita nostrum facilis, deserunt magnam eligendi
              nulla asperiores ab vero eos! Temporibus voluptatum officiis
              dolores similique dicta expedita nostrum.
            </p>
            <a
              className="header__press-release"
              href={props.pageContext.pressRelease}
              target="_blank"
              rel="noopener noreferrer"
            >
              Press release
            </a>
          </header>
          <ul className="image-list" onClick={e => handleImageClick(e)}>
            {renderImageList}
          </ul>
          {videos && (
            <ul className="video-list">
              {videos.map((video, i) => (
                <li className="video-item" key={i}>
                  <VideoCard video={video} />
                </li>
              ))}
            </ul>
          )}
          <div className="pagination">
            {props.pageContext.previous && (
              <div className="pagination__previous">
                <Link
                  className="pagination__previous-link"
                  to={props.pageContext.previous.slug}
                >
                  <FontAwesomeIcon
                    className="pagination__previous-icon"
                    icon={faLongArrowAltLeft}
                  />
                  <span className="pagination__previous-text">
                    {props.pageContext.previous.project_title}
                  </span>
                </Link>
              </div>
            )}
            {!props.pageContext.previous && <div />}
            {props.pageContext.next && (
              <div className="pagination__next">
                <Link
                  className="pagination__next-link"
                  to={props.pageContext.next.slug}
                >
                  <span className="pagination__next-text">
                    {props.pageContext.next.project_title}
                  </span>
                  <FontAwesomeIcon
                    className="pagination__next-icon"
                    icon={faLongArrowAltRight}
                  />
                </Link>
              </div>
            )}
          </div>
        </TemplateWrapper>
      </Layout>
      {showModal && (
        <Portal>
          <button>
            <FontAwesomeIcon
              icon={faTimes}
              color="white"
              size="2x"
              onClick={handleCloseClick}
            />
          </button>
          <img src={modalSrc} />
        </Portal>
      )}
    </>
  )
}

export default ProjectTemplate
