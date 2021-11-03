import React, {Component} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import DudIndex from './pages/DudIndex'
import DudShow from './pages/DudShow'
import DudNew from './pages/DudNew'
import DudEdit from './pages/DudEdit'
import NotFound from './pages/NotFound'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      duds: []
    }
  }

  componentDidMount(){
    this.readDud()
  }

  readDud = () => {
    fetch("http://localhost:3000/duds")
    .then(response => response.json())
    .then(dudArray => this.setState({duds: dudArray}))
    .catch(errors => (console.log(errors)))
  }
  createNewDud = (newDud) => {
    fetch("http://localhost:3000/duds", {
      body: JSON.stringify(newDud),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readDud())
    .catch(errors => (console.log(errors)))
  }

  updateDud = (editedDud, id) => {
    fetch(`http://localhost:3000/duds/${id}`,{
      body: JSON.stringify(editedDud),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readDud())
    .catch(errors => (console.log(errors)))
  }

  deleteDud = (id) => {
    fetch(`http://localhost:3000/duds/${id}`, {
      headers: {
        "Content-Type" : "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readDud())
    .catch(errors => console.log("delete errors:", errors))
  }
  
    render() {
        return (
          <Router>
            <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dudindex" render={(props) => <DudIndex duds={this.state.duds} />} />
                <Route path="/dudshow/:id" render={(props) => {
                  let id = props.match.params.id
                  let dud = this.state.duds.find(dud => dud.id === +id)
                  return <DudShow dud={dud} />
                }} />
                <Route path="/dudnew"render={(props) => <DudNew createNewDud={this.createNewDud} />} />
                <Route path="/dudedit/:id"
                      render={(props) => {
                        let id = props.match.params.id
                        let dud = this.state.duds.find(c => c.id === +id)
                        return <DudEdit dud={dud} updateDud={this.updateDud } id={id} />
                      }}
                    />
                <Route component= {NotFound}/>
              </Switch>
            <Footer />
          </Router>
    )
  }
}
export default App
