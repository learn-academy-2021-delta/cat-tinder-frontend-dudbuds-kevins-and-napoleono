import React, { Component } from 'react'
import buddyup from '../assets/buddy-up.png'

class Home extends Component {
  render() {
    return (
      <div className="page-body">
        <h1>WELCOME TO DUD BUD</h1>
        <br />
        <h3>We Are The Friend, Of The Friendless</h3>
      <br />
      <img src={buddyup} alt="Buddy Up" className="buddyup-bud" />
      </div>
    )
  }
}

export default Home