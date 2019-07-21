import React from 'react';
import CommonHeaderStyle from '../Common/CommonHeaderStyle';
import BasketIcon from '../../assets/shopping109.png';
import NameHeaderStyle from '../Common/NameHeaderStyle';
import RightElementOfHeader from '../Common/RightElementOfHeader';
import LinkToBasket from './LinkToBasket';


 function Header({ name }) {
  return (
    <div style={CommonHeaderStyle}>
      <div style={NameHeaderStyle}>{name}</div>
      <div style={RightElementOfHeader}>
          <LinkToBasket />
      </div>
    </div>
      );
}

export default Header;