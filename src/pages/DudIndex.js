import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button, CardTitle, Row, Col } from 'reactstrap'
import tomdud from '../assets/tom-dud.jpg'

class DudIndex extends Component {
  render() {
    const { duds } = this.props
    return (
      <div className="page-body">
        <h3>Meet the Duds!</h3>
        <div className="index-cards">
          {duds && duds.map(dud => {
            return (
              <Row key={dud.id}>
                <Col sm="6">
                  <Card body>
                    <CardTitle tag="h5">Hi, my name is {dud.name}</CardTitle>
                    <h2><br />
      <img src={tomdud} alt="tom friend" className="tomdud-bud" /></h2>
                    <NavLink to={`/dudshow/${dud.id}`}><Button>More Info Here</Button></NavLink>
                  </Card>
                </Col>
              </Row>
            )
          })}
        </div>
      </div>
    )
  }
}
export default DudIndex
