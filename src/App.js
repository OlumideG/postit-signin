import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";


function App() {
  return (
    <div>
   <Switch>
          <Route exact path="/" component ={Signin} />
          <Route path="/signup" component = {Signup} />
  </Switch>
    </div>
  );
}

export default App;
