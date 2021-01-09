import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignInComponent from '../components/signin'
import Home from '../components/home'
import Header from '../components/header'

const Routes = () => {
    return(
        <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={SignInComponent}>
          </Route>
          <Route path='/home' component={Home}>
          </Route>
        </Switch>
      </Router>
    )
}
export default Routes