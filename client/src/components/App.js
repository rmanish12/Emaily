import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { FETCH_USER } from '../actions/types'
import axios from 'axios';

import Header from './Header'
import Homepage from './Homepage'
import Dashboard from './Dashboard'
import SurveyNew from './survey/SurveyNew'

class App extends React.Component {

  render() {
    return (
      <div>
          <div>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path = "/" component = {Homepage}/>
              <Route exact path = "/surveys" component = {Dashboard}/>
              <Route exact path = "/survey/new" component = {SurveyNew}/>
            </div>
          </BrowserRouter>
          </div>
      </div>
    )
  }
}

export default connect(null, 
  async (dispatch) => {
    const res = await axios.get('/api/current_user')

    dispatch({type: FETCH_USER, payload: res.data})
  })(App)
 