import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Figure, AudioTitle } from './audio.css';

const Audio = ({ audio }) => (
  <Container>
    <Title>Chapter Audio</Title>
    {audio.map(item => {
      return (
        <Figure key={item.path}>
          {/*eslint-disable-next-line */}
          <audio controls>
            <source src={item.path} type="audio/mp3" />
          </audio>
          <AudioTitle>{item.title}</AudioTitle>
        </Figure>
      );
    })}
  </Container>
);

Audio.propTypes = {
  audio: PropTypes.array.isRequired,
};

export default Audio;
