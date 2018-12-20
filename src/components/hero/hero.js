import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Title } from './hero.css';

const Hero = ({ background, title }) => (
  <Container>
    <Image src={background} alt={title} />
    <Title>{title}</Title>
  </Container>
);

Hero.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Hero;
