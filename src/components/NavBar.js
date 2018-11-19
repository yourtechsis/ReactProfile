import React, { Component } from 'react';
import Portfolio from './Portfolio'
import { Switch, Route } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

      

 class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });


  }

  
  render() {
    return (
      <div>
        <Navbar className="navColor" light expand="md">
          <NavbarBrand href="/index.js"> xoxoxo </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Portfolio">  Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/yourtechsis">GitHub</NavLink>
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



 export default NavBar;
 