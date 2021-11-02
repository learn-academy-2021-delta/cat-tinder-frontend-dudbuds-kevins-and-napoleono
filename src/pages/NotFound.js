import React, { Component } from 'react'
import nodud from '../assets/no-dud.png'

class NotFound extends Component {
  render() {
    return (
      <div className="page-body">
      <h3>NOPE! NO DUDS FOUND HERE!</h3>
      <img src={nodud} alt="Huge Muscle Guy Working Out" className="nodud-bud" />
    </div>
    )
  }
}
export default NotFound