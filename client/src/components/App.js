import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import actions from '../actions'

// import axios from 'axios'  

import Header from './Header'
// import { FETCH_USER } from '../actions/types';

const Landing = () => <h2>Landing</h2>
const Surveys = () => <h2>Dashboard</h2>

class App extends React.Component {

  // componentDidMount() {
  //   // axios.get('/api/current_user')
  //   //   .then(res => console.log(res))
  //   this.props.fetchUser()
  // }

  // fetchUser = this.fetchUser.bind(this)

  // fetchUser () {
  //   console.log('Clicked')
  //   axios.get('/api/current_user')
  //     .then(res => console.log(res))
  // }

  render() {
    return (
      <div>
          <BrowserRouter>
            <div>
              <Header />
              {/* <button onClick = {this.fetchUser}>Fetch</button> */}
              <Route exact path = "/" component = {Landing}/>
              <Route path = "/surveys" component = {Surveys}/>
            </div>
          </BrowserRouter>
        </div>
    )
  }
}

// const mapDispatchToProps = actions

export default connect(null, actions)(App);
 