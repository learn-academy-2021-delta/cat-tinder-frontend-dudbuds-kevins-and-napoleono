import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card, CardTitle, CardText } from 'reactstrap'

class DudShow extends Component {
 render() {
   let {dud} = this.props
    return (
     <div className="page-body">
       {dud &&
        <Card body className="card-show">
          <CardTitle tag="h5">Hi! My name is {dud.name}</CardTitle>
          <h2>💪</h2>
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
      
     
      
    
  

export default DudShow