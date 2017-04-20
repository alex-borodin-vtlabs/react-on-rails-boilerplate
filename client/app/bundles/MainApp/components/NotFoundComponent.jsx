import React from 'react';
import PropTypes from 'prop-types';

import BaseComponent from './BaseComponent';


export default class NotFoundComponent extends BaseComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    locationState: PropTypes.object,
  };

  render() {
    return (
      <div>
        Page Not Found!
      </div>
    );
  }
}
