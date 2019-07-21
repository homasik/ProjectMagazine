import React from 'react';
import BasketIcon from '../../../assets/shopping109.png';
import { Link } from 'react-router-dom';
import LinkStyle from './LinkStyle';
import ImgBasketStyle from './ImgBasketStyle';


const LinkToBasket = () => {
  return (
    <Link style={LinkStyle} to='/basket'>
      <img src={BasketIcon} style={ImgBasketStyle} />
      Basket
    </Link>
  )
};
export default LinkToBasket;