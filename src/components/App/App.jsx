import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'

import CatalogComponent from '../Pages/CatalogComponent';
import BasketComponent from '../Pages/BasketComponent/BasketComponent';

 function App() {
  return (
    <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={CatalogComponent} />
            <Route path="/basket" component={BasketComponent} />
          </Switch>
        </BrowserRouter>
    </Fragment>
  );
}

export default connect(
  state => ({
  }),
  dispatch => ({})
)(App)


