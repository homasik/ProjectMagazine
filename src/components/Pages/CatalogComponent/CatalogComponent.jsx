import React, { Component, Fragment } from 'react';
import Header from '../../Header';
import MainContent from '../../MainContent';

// eslint-disable-next-line react/display-name
class CatalogComponent extends Component {
    render() {
        return (
          <div>
              <Header name='Catalog' />
              <MainContent />
          </div>
        )
    }
}

export default CatalogComponent;