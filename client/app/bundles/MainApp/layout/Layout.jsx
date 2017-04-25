import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import BaseComponent from '../components/BaseComponent';
import css from './Layout.scss';


export default class Layout extends BaseComponent {
  constructor(props) {
     super(props);

     this.toggle = this.toggle.bind(this);
     this.state = {
       isOpen: false
     };
   }

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  /* eslint-disable react/no-unescaped-entities */
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">React on Rails boilerplate</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <IndexLink to="/" activeClassName="active" className="nav-link">
                  Root URL
                </IndexLink>
              </NavItem>
              <NavItem>
                <Link to="/route_example" activeClassName="active" className="nav-link">Second Route</Link>
              </NavItem>
              <NavItem>
                <Link to="/azazaza" activeClassName="active" className="nav-link">Not Found Route</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
