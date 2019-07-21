import React, {Component} from 'react';
import {connect} from 'react-redux';

import StyleItemsContainer from '../StyleItemsContainer';
import ItemElement from '../ItemElement'
import {fetchPhones} from '../../../actions';
import {getPhones} from '../../../selectors/GetPhones';

class ProductItem extends Component {
  componentDidMount() {

  }

  render(){
    return (
      <div style={StyleItemsContainer}>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  phones: getPhones(state)
});
const mapDispatchToProps = (props) => {
  fetchPhones(props)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);