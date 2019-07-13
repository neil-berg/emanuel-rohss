import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import Layout from "../components/layout"
// import ImageCard from "../components/ImageCard"
import VideoCard from "../components/VideoCard"
import Portal from "../components/Portal"
import Modal from "../components/Modal"

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
                    fluid(maxWidth: 960) {
                      ...GatsbyImageSharpFluid_withWebp
                      aspectRatio
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
const ProjectTemplate = props => {
  // modalDetails stores src and alt attributes for a clicked image
  // which is passed as a child img to <Modal />

  const [showModal, setShowModal] = useState(false)
  const [modalDetails, setModalDetails] = useState({})

  const handleImageClick = e => {
    if (e.target.nodeName === "IMG") {
      setShowModal(true)
      setModalDetails({ src: e.target.src, alt: e.target.alt })
    }
  }

  // Extract image and video nodes from Airtable
  // Videos may be null for a given project
  const images = props.data.allAirtable.nodes[0].data.Images
  const videos = props.data.allAirtable.nodes[0].data.Videos

  const renderImageList = images.map((image, i) => {
    // Using aspect ratio, calculate each image width
    // given a fixed height of 200px
    const aspectRatio =
      image.data.attachment.localFiles[0].childImageSharp.fluid.aspectRatio
    const widthSmall = 150 * aspectRatio

    const widthLarge = 250 * aspectRatio

    return (
      <ImageCard
        className="image-card"
        widthSmall={widthSmall}
        widthLarge={widthLarge}
        key={i}
      >
        <figure className="image">
          <Img
            alt={image.data.image_title}
            fluid={image.data.attachment.localFiles[0].childImageSharp.fluid}
          />
        </figure>
      </ImageCard>
    )
  })

  return (
    <>
      <Layout>
        <SEO
          title={props.pageContext.projectTitle}
          description={`Project page for ${props.pageContext.projectTitle}`}
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
          <div className="image-list" onClick={e => handleImageClick(e)}>
            {renderImageList}
          </div>
          {videos && (
            <ul className="video-list">
              {videos.map((video, i) => (
                <VideoCard key={i} video={video} />
              ))}
            </ul>
          )}
          <nav className="pagination">
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
          </nav>
        </TemplateWrapper>
      </Layout>
      <Portal>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          modalDetails={modalDetails}
        />
      </Portal>
    </>
  )
}

const ImageCard = styled.div`
  height: 150px;
  width: ${props => props.widthSmall}px;
  display: inline-block;
  margin: 0.5rem;

  @media screen and (min-width: 800px) {
    height: 250px;
    width: ${props => props.widthLarge}px;
  }
`

const TemplateWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 1rem 1.5rem 1rem calc(50px + 1.5rem);
  max-width: calc(960px + 1.5rem + 50px + 1.5rem);

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
    margin-bottom: 2rem;
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
    display: flex;
    min-height: 200px;
    flex-wrap: wrap;
    justify-content: center;
  }

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

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    allAirtable: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    next: PropTypes.shape({
      project_title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
    previous: PropTypes.shape({
      project_title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
    projectTitle: PropTypes.string.isRequired,
    pressRelease: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProjectTemplate
