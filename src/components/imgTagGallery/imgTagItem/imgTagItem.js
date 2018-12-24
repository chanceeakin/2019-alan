import React from 'react';
import PropTypes from 'prop-types';
import { Figure, Title, Copy, Image } from './imgTagItem.css';

const Item = ({ title, copy, path }) => (
  <Figure>
    <Image src={path ? path : ''} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy ? copy : ''}</Copy>
    </figcaption>
  </Figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  path: PropTypes.string.isRequired,
};

export default Item;
