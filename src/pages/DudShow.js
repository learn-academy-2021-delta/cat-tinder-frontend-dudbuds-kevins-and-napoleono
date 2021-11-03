import React, { Component } from 'react'

import { Button, Card, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { Card, CardTitle, CardText, Col } from 'reactstrap'

class DudShow extends Component {
 render() {
   let {dud} = this.props
    return (

     <div className="page-body">
       {dud &&
        <Card body className="card-show">
          <CardTitle tag="h5">Hi! My name is {dud.name}</CardTitle>
          <h2>Friend Of The Friendless</h2>
          <CardText>I am {dud.age} years old</CardText>
          <CardText>My Hobbies are {dud.hobbies}</CardText>
          <NavLink to={`/dudedit/${dud.id}`}>
            <Button>Edit Dud Profile</Button>
          </NavLink>
          <br />
          <NavLink to="/dudindex">
            <Button onClick={() => this.props.deleteDud(dud.id)}>
              Delete Dud Profile
            </Button>
          </NavLink>
        </Card>
         }
         </div>
       )
     }
    }  
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