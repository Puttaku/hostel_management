import React, { Component } from 'react'
import './Style/App.css';
import {Route} from "react-router-dom"
import login from "./Component/login"
import forget from "./Component/forget"
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={login}/>
        <Route exact path="/forget" component={forget}/>
      </div>
    )
  }
}