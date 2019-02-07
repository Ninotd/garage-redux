import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  ComponentWillMount () {
    this.props.fetchCars;
  }

  renderCars() {
    return (
      <span>lol</span>
    );
  }
  // TODO }
  render() {
    return (
      <div>
        <div>
          <Link className="btn btn-primary btn-cta" to="/cars/new">
            Add a car
          </Link>
        </div>
        <div>
          {this.renderCars()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
