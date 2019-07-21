import React from 'react';
import BuyButton from '../Buttons/BuyButton';
import PropTypes from 'prop-types';

const propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

const ItemElement = ({image, name, price, id}) => (
  <div key={id}>
    <img src={image.src} alt={name} style={image} />
    <div>{name}</div>
    <div>{price}</div>
    <BuyButton />
  </div>
);

export default ItemElement;

ItemElement.propTypes = propTypes;