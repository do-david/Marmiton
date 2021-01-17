import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignInComponent from '../components/signin'
import Home from '../components/home'
import Header from '../components/header'
import UserComponent from '../components/user'
import PrivateRoute from '../utils/privateRoute'
import CreateRecipe from '../components/user/createRecipe'

const Routes = () => {
    return(
        <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={SignInComponent}>
          </Route>
          <Route path='/home' component={Home}>
          </Route>
          <PrivateRoute path='/user' component = {UserComponent}>
          </PrivateRoute>
          <PrivateRoute path='/create' component= {CreateRecipe}>
          </PrivateRoute>
        </Switch>
      </Router>
    )
}
export default Routes