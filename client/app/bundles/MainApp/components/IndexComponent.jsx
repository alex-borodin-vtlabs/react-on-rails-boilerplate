import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import BaseComponent from './BaseComponent';
import css from './IndexComponent.scss';


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
    this.props.actions.callApi('example', 'GET', 'example');
  }

  render() {
    const { data } = this.props;
    return (
      <div className={css.body} >
        <h1 className="h1 my-3">Root!</h1>
        <Button color="primary" onClick={this.clickExample}>{ data.get('example').get('counter') }</Button>
      </div>
    );
  }
}
