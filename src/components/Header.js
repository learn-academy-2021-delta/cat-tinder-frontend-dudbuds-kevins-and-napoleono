import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import dudLogo from '../assets/dud-logo.jpg'
import { logDOM } from '@testing-library/dom'


class Header extends Component {

    render() {
      return (
        <header>
          <NavLink to="/">
            <img src={dudLogo} alt="logo for DudBud" className="dud-logo"/>
            </NavLink>
            <div className="nav-links">
              <ul>
                <NavLink to="/dudIndex">Meet the Duds</NavLink>
              </ul>
              <ul><NavLink to="dudNew">Add A Bud</NavLink>
            </ul>
          </div>
        </header>
      )
    }
  }
  export default Header