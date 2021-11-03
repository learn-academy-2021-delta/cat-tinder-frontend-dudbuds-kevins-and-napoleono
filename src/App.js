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
import duds from './mockDud.js'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      duds: duds
    }
  }
  createNewDud = (newdud) => {
    console.log(newdud)
  }
  
    render() {
      console.log(this.state.duds)
        return (
          <Router>
            <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dudindex" component={DudIndex} />
                <Route path="/dudshow" component={DudShow} />
                <Route path="/dudnew"render={(props) => <DudNew createNewDud={this.createNewDud} />} />
                <Route path="/dudindex" render={(props) => <DudIndex duds={this.state.duds} />} />
                <Route path="/dudshow/:id" render={(props) => {
                  let id = props.match.params.id
                  let dud = this.state.duds.find(dud => dud.id === +id)
                  return <DudShow dud={dud} />
                }} />
                <Route path="/dudnew" component={DudNew} />
                <Route path="/dudedit" component={DudEdit}/>
                <Route component= {NotFound}/>
              </Switch>
            <Footer />
          </Router>
    )
  }
}
export default App
