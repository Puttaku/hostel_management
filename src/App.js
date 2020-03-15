import React, { Component } from 'react'
import './Style/App.css';
import './Style/navbar.css'
import {Route} from "react-router-dom"
import login from "./Component/login"
import forget from "./Component/forget"
import redirect from "./Component/redirect"
import regis from "./Component/regis"
import home from "./Component/home"
import Navbar from "./Component/navbar"
import book from "./Component/book"
import {withRouter} from "react-router-dom"
class App extends Component {
  render() {
    return (
      <div className="App flexOn">
        {this.props.location.pathname !== "/login" && this.props.location.pathname !== "/forget" && this.props.history.pathname !== "/register" ? <Navbar/> : ""}
        <Route exact path="/" component={redirect}/>
        <Route exact path="/login" component={login}/>
        <Route exact path="/forget" component={forget}/>
        <Route exact path="/register" component={regis}/>
        <Route exact path="/home" component={home}/>
        <Route exact path="/booked" component={book}/>
      </div>
    )
  }
}
export default withRouter(App);