import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Subtitle, Anchor } from './links.css';

const Links = ({ links, esri }) => (
  <Container>
    <Title>Links and Esri</Title>
    <Subtitle>Links</Subtitle>
    {links.map(item => {
      return (
        <Anchor href={item.path} key={item.path}>
          {item.title}
        </Anchor>
      );
    })}
    <Subtitle>Esri</Subtitle>
    {esri.map(item => {
      return (
        <Anchor href={item.path} key={item.path}>
          {item.title}
        </Anchor>
      );
    })}
  </Container>
);

Links.propTypes = {
  links: PropTypes.array.isRequired,
  esri: PropTypes.array.isRequired,
};

export default Links;
