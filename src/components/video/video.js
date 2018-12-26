import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, VideoContainer } from './video.css';

const Audio = ({ video }) => {
  return (
    <Container>
      <Title>{video.title}</Title>
      <VideoContainer>
        <iframe title={video.title} src={video.path} allowFullScreen="" />
      </VideoContainer>
    </Container>
  );
};

Audio.propTypes = {
  video: PropTypes.object.isRequired,
};

export default Audio;
