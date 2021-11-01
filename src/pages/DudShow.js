import React, { Component } from 'react'
import { Card, CardTitle, CardText, Col } from 'reactstrap'

class DudShow extends Component {
  render() {
    return (
      <>
        <h3>I am the Dud Show</h3>
        { this.props.dud && 
        <>
        <Col sm="6">
  <Card body>
    <CardTitle>Hi, my name is {this.props.dud.name}!</CardTitle>
    <CardText>I am {this.props.dud.age} years old. My hobbies are {this.props.dud.hobbies}!</CardText>
  </Card >
</Col >
</>
        }
      </>
    )
  }
}
export default DudShow