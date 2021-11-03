import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class DudEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: this.props.dud ? this.props.dud.name : "",
        age: this.props.dud ? this.props.dud.age : "",
        hobbies: this.props.dud ? this.props.dud.hobbies : "",
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
    this.props.updateDud(this.state.form, this.props.id)
    this.setState({submitted: true})
  }
  render() {
    
    return (
      <div className="page-body">
        <h3>Update Dud Stats</h3>
        <Form>
          <FormGroup>
            <Label for="name">
              Dud's Name
            </Label>
            <Input
              name="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">
              Dud's Age
            </Label>
            <Input
              name="age"
              type="number"
              min="18"
              max="80"
              onChange={this.handleChange}
              value={this.state.form.age}
            />
          </FormGroup>
          <FormGroup>
            <Label for="hobbies">
               Hobbies 
            </Label>
            <Input
              name="hobbies"
              type="text"
              onChange={this.handleChange}
              value={this.state.form.hobbies}
            />
          </FormGroup>
          <Button
            onClick={this.handleSubmit}
            name="submit"
          >
            Update Dud Info
          </Button>
        </Form>
        {this.state.submitted && <Redirect to={`/dudshow/${this.props.dud.id}`} />}
      </div>
    )
  }

}
export default DudEdit
