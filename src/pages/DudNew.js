import React, { Component } from 'react'
import {Form, FormGroup, Input, Button, Label} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class DudNew extends Component {
  constructor(props){
    super(props)
      this.state = {
        form:{
        name: "",
        age: "",
        hobbies: ""
      },
        submitted: false
    }
  }
  
  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }
  handleSubmit = () => {
    this.props.createNewDud(this.state.form)
    this.setState({submitted: true})
  }
  
  render() {
    return (
      <div className="page-body">
      <h3>Become A Dud Bud</h3>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.form.name}/>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
            type="number"
            name="age"
            min="18"
            max="80"
            onChange={this.handleChange}
            value={this.state.form.age}/>
          </FormGroup>
        </Form>
        <Form>
          <FormGroup>
            <Label for="hobbies">Hobbies</Label>
            <Input
            type="text"
            name="hobbies"
            onChange={this.handleChange}
            value={this.state.form.hobbies}
            />
          </FormGroup>
            <Button
            name="submit"
            onClick={this.handleSubmit}>
            New Profile
            </Button>
            </Form>
              {this.state.submitted && <Redirect to="/dudindex" />}
            </div>
          )
        }
      }
export default DudNew