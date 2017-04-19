import React from 'react';
import { IndexLink, Link } from 'react-router';
import BaseComponent from '../components/BaseComponent';
import PropTypes from 'prop-types';


export default class Layout extends BaseComponent {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  /* eslint-disable react/no-unescaped-entities */
  render() {
    return (
      <section>
        <header>
          <ul>
            <li>
              <IndexLink to="/" activeClassName="active">
                Root URL
              </IndexLink>
            </li>
            <li>
              <Link to="/route_example" activeClassName="active">Second Route</Link>
            </li>
            <li>
              <Link to="/azazaza" activeClassName="active">Not Found Route</Link>
            </li>
          </ul>
        </header>
        {this.props.children}
      </section>
    );
  }
}
