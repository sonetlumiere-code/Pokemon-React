import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {

  const { authState } = useContext(AuthContext);

  if (authState.isAuthenticated) {
    return children
  } else {
    return <Navigate to='/login' />
  }

}

export default ProtectedRoutes