import React from 'react';
import PropTypes from 'prop-types';
import Item from './imgTagItem/imgTagItem';
import { Container } from './imgTagGallery.css';

const ImgTagGallery = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

ImgTagGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImgTagGallery;
