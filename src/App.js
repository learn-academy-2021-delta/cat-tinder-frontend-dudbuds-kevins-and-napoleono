import React, {Component} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import DudIndex from './pages/DudIndex'
import DudShow from './pages/DudShow'
import DudNew from './pages/DudNew'
import DudEdit from './pages/DudEdit'
import DudNotFound from './pages/DudNotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import Duds from './mockDud.js'
import { render } from '@testing-library/react';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      duds: duds
    }
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
                        <Route path="/dudnew" component={DudNew} />
                       <Route path="/dudedit" component={DudEdit}/>
                      <Route component= {DudNotFound}/>
                    </Switch>
                  <Footer />
             </Router>
    )
  }
}
export default App
