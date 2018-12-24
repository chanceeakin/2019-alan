import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Video } from './video.css';
import MEDIA from 'helpers/mediaTemplates';

const Audio = ({ video }) => (
  <Container>
    <Title>{video.title}</Title>
    {MEDIA.PHONE ? (
      <Video
        title={video.title}
        height={126}
        width={224}
        src={video.path}
        frameBorder="0"
        allowFullScreen=""
      />
    ) : (
      <Video
        title={video.title}
        height={315}
        width={560}
        src={video.path}
        frameBorder="0"
        allowFullScreen=""
      />
    )}
  </Container>
);

Audio.propTypes = {
  video: PropTypes.object.isRequired,
};

export default Audio;
