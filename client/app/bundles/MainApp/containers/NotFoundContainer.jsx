// Simple example of a React "smart" component

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BaseComponent from '../components/BaseComponent';
import NotFoundComponent from '../components/NotFoundComponent';
import * as actionCreators from '../actions/mainAppActionCreators';



function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { data: state.$mainAppStore };
}

class NotFoundContainer extends BaseComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    location: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { dispatch, data } = this.props;
    const actions = bindActionCreators(actionCreators, dispatch);
    const locationState = this.props.location.state;

    return (
      <NotFoundComponent {...{ actions, data, locationState }} />
    );
  }
}

// Don't forget to actually use connect!
export default connect(select)(NotFoundContainer);
