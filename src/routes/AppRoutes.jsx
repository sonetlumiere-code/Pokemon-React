import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Login from '../views/Login/Login';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <Login/>
            </PublicRoute>
          }
        />
        <Route 
          path='*' 
          element={
          <ProtectedRoutes>
            <Routes>
              <Route path='*' element={<Home/>} />
            </Routes>
          </ProtectedRoutes>
        }/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default AppRoutes