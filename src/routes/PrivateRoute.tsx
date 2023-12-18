import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token')
  const location = useLocation()

  if (token) {
    return children
  }

  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
