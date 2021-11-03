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
              <ul><NavLink to="dudNew">Create A Profile</NavLink>
            </ul>
            <ul>
            <a target='blank'href="https://www.mentalhealth.va.gov/depression/index.asp?utm_source=google&utm_medium=cpc&utm_campaign=search-va-depression&utm_content=treatments-and-programs&utm_term=%2Bva%20%2Bdepression&gclid=Cj0KCQjw5oiMBhDtARIsAJi0qk0wBkI8c6DETR4mopEMce9UjYxWxo6naN8_NTtN9J7hYOK4UbimofcaAiWVEALw_wcB
              "id="vamentalhealth">Help for Veterans with Depression</a>
          </ul>
          </div>
        </header>
      )
    }
  }
  export default Header