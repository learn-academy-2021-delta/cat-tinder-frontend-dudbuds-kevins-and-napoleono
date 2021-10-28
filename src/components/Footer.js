import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Footer extends Component{
  render(){
    return(
      <footer>
        <ul>
          <NavLink to="/">&copy;2021 Napoleon & Kevin</NavLink>
        </ul>
        <ul>
          <NavLink to="/dudindex">Meet All the Duds</NavLink>
        </ul>
        <ul>
          <NavLink to="/dudnew">Add a Bud</NavLink>
        </ul>
      </footer>
    )
  }
}
  export default Footer