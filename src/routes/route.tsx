import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Reporting from '../pages/Reporting'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Tasks from '../pages/Tasks'
import Users from '../pages/Users'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/tasks',
    element: <Tasks />
  },
  {
    path: '/reporting',
    element: <Reporting />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/users',
    element: (
      <PrivateRoute>
        <Users />
      </PrivateRoute>
    )
  }
])
