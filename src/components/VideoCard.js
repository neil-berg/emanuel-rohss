import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const VideoWrapper = styled.div`
  line-height: 1.1em;
  padding-top: 0.5rem;

  .video__title,
  .video__year,
  .video__materials,
  .video__dimensions,
  .video__length {
    margin: 0;
    padding: 0;
    color: #6d6e70;
    font-size: 0.85em;
  }
  .video__title {
    color: black;
    padding-top: 0.5rem;
  }
`

const VideoCard = ({ video }) => {
  return (
    <VideoWrapper>
      <video
        width="100%"
        max-height="100%"
        src={video.data.attachment.localFiles[0].url}
        controls
        style={{ outline: "0" }}
      >
        Your browser does not support embedded video.
      </video>
      <p className="video__title">{video.data.video_title}</p>
      <p className="video__year">{video.data.year}</p>
      <p className="video__materials">{video.data.materials}</p>
      <p className="video__length">{video.data.length}</p>
      <p className="video__dimensions">{video.data.dimensions}</p>
    </VideoWrapper>
  )
}

VideoCard.propTypes = {
  video: PropTypes.shape({
    data: PropTypes.shape({
      attachment: PropTypes.shape({
        localFiles: PropTypes.array.isRequired,
      }),
      video_title: PropTypes.string,
      year: PropTypes.string,
      length: PropTypes.string,
      dimensions: PropTypes.string,
    }),
  }),
}

export default VideoCard
