import React from 'react';

import BaseComponent from './BaseComponent';
import PropTypes from 'prop-types';


export default class IndexComponent extends BaseComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    locationState: PropTypes.object,
  };

  clickExample(e) {
    e.preventDefault();
    this.props.actions.example();
  }

  render() {
    const { data, actions } = this.props;
    return (
      <div>
        <a href="#" onClick={this.clickExample.bind(this)}>{ data.get('counter') }</a>
      </div>
    );
  }
}
