import React from 'react'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/service/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TopNav from './components/shared/navbar/TopNav'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// <ToastContainer position='top-center' />

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
