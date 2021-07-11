import React from "react";

import Signup from "./Authentication/Signup"
import {Container} from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Login from "./Authentication/Login";
import UpdateProfile from "./Authentication/UpdateProfile";
import Profile from './Authentication/Profile'
import Dashboard from "./main/Dashboard";
import PrivateRoute from "./Authentication/PrivateRoute";


function App() {
  return (
    
        <Router>


        <AuthProvider>

        <Switch>
        <PrivateRoute exact path='/' component={Dashboard}/>
        <PrivateRoute exact path='/folder/:folderId' component={Dashboard}/>
        <Route exact path='/user' component={Profile}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/update-profile' component={UpdateProfile}/>
        </Switch>



        </AuthProvider>

        </Router>


   
    
  );
}

export default App;
