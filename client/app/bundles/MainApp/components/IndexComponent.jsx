import React from 'react';

import BaseComponent from './BaseComponent';
import PropTypes from 'prop-types';


export default class IndexComponent extends BaseComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    locationState: PropTypes.object,
  };


  render() {
    const { data, actions } = this.props;
    return (
      <div>
        <a onClick={actions.example}>{ data.get('counter') }</a>
      </div>
    );
  }
}
