import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// import actions from '../actions'
import { FETCH_USER } from '../actions/types'

import Header from './Header'
import Homepage from './Homepage'
import axios from 'axios';

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

export default connect(null, 
  async (dispatch) => {
    const res = await axios.get('/api/current_user')

    dispatch({type: FETCH_USER, payload: res.data})
  })(App)
 