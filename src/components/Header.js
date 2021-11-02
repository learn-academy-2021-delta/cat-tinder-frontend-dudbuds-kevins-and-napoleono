import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import dudLogo from '../assets/dud-logo.jpg'


class Header extends Component {

    render() {
      return (
        <header>
          <NavLink to="/">
            <img src={dudLogo} alt="logo for DudBud" className="dud-logo"/>
            </NavLink>
            <br/>
            <div className="nav-links">
              <ul>
                <NavLink to="/dudIndex">Meet The Duds</NavLink>
              </ul>
              <ul><NavLink to="dudNew">Make A Profile</NavLink>
            </ul>
          </div>
        </header>
      )
    }
  }
  export default Header