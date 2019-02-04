import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../actions' 

import Header from './Header'
import Homepage from './Homepage'

const Surveys = () => <h2>Dashboard</h2>

class App extends React.Component {

  render() {
    return (
      <div>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path = "/" component = {Homepage}/>
              <Route path = "/surveys" component = {Surveys}/>
            </div>
          </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);
 