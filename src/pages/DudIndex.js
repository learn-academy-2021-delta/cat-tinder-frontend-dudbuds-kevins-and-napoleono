import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class DudIndex extends Component {
  render() {
    return (
      <>
        <h3>Meet The Duds</h3>
        <br />
    {this.props.duds && this.props.duds.map(dud => {
      return (
        <p key={dud.id}>
        <NavLink to={`/dudshow/${dud.id}`}>
        {dud.name}
      </NavLink>
      </p>
      )
    })}
      </>
    )
  }
}

export default DudIndex