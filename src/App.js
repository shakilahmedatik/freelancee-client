import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TopNav from '../src/components/shared/navbar/TopNav'
import PrivateRoute from '../src/components/auth/PrivateRoute'
// components
import Home from '../src/components/service/Home'
import Login from '../src/components/auth/Login'
import Register from '../src/components/auth/Register'
import Dashboard from '../src/components/user/Dashboard'
import DashboardSeller from '../src/components/user/DashboardSeller'
import NewGig from '../src/components/service/NewGig'

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position='top-center' />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute
          exact
          path='/dashboard/seller'
          component={DashboardSeller}
        />
        <PrivateRoute exact path='/gigs/new' component={NewGig} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
