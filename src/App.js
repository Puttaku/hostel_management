import React, { Component } from 'react'
import './Style/App.css';
import './Style/navbar.css'
import {Route, Switch} from "react-router-dom"
import login from "./Component/login"
import forget from "./Component/forget"
import redirect from "./Component/redirect"
import regis from "./Component/regis"
import home from "./Component/home"
import Navbar from "./Component/navbar"
import book from "./Component/book"
import detail from "./Component/detail"
import restore from"./Component/restore"
import {BrowserRouter} from "react-router-dom"
class App extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App flexOn">
        <Navbar/>
          <Switch>
            <Route exact path="/" component={redirect}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/forget" component={forget}/>
            <Route exact path="/register" component={regis}/>
            <Route exact path="/home" component={home}/>
            <Route exact path="/booked" component={book}/>
            <Route path="/detail" component={detail}/>
            <Route path="/reset" component={restore}/>
          </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
export default App;