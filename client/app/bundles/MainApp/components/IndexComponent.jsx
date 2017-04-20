import React from 'react';
import PropTypes from 'prop-types';

import BaseComponent from './BaseComponent';


export default class IndexComponent extends BaseComponent {

  constructor(props) {
    super(props);

      // Bind functions
    this.clickExample = this.clickExample.bind(this);
  }

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
    const { data } = this.props;
    return (
      <div>
        <button onClick={this.clickExample}>{ data.get('counter') }</button>
      </div>
    );
  }
}
