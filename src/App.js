import React, { Component } from 'react'
import './Style/App.css';
import {Route} from "react-router-dom"
import login from "./Component/login"
import forget from "./Component/forget"
import redirect from "./Component/redirect"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={redirect}/>
        <Route exact path="/login" component={login}/>
        <Route exact path="/forget" component={forget}/>
      </div>
    )
  }
}
export default App;