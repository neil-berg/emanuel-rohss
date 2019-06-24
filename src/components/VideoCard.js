import React from "react"
import styled from "styled-components"

const VideoWrapper = styled.div`
  line-height: 1.1em;

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
      ></video>
      <p className="video__title">{video.data.video_title}</p>
      <p className="video__year">{video.data.year}</p>
      <p className="video__materials">{video.data.materials}</p>
      <p className="video__length">{video.data.length}</p>
      <p className="video__dimensions">{video.data.dimensions}</p>
    </VideoWrapper>
  )
}

export default VideoCard
