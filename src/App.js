import React from 'react'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TopNav from './components/Shared/NavBar/TopNav'

const App = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
