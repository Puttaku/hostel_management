import React from 'react';
import './Style/App.css';
import {Route} from "react-router-dom"
import login from "./Component/login"
function App() {
  return (
    <div className="App">
      <Route path="/login" component={login}/>
    </div>
  );
}

export default App;
