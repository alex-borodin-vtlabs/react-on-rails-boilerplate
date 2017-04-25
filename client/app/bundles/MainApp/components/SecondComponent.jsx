import React from 'react';
import PropTypes from 'prop-types';

import BaseComponent from './BaseComponent';


export default class SecondComponent extends BaseComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    locationState: PropTypes.object,
  };

  render() {
    return (
      <div>
        <h1 className="h1 my-3">Second!</h1>
      </div>
    );
  }
}
