import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoute from './PublicRoute';
import Login from '../views/Login/Login';
import Home from '../views/Home/Home';
import Gallery from '../views/Home/Gallery/Gallery';
import Favs from '../views/Home/Favs/Favs';
import Search from '../views/Home/Search/Search';
import Error404 from '../views/Error404/Error404';

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
                <Route path='/' element={<Home/>}>
                  <Route index element={<Gallery/>} />
                  <Route path='search' element={<Search/>} />
                  <Route path='favs' element={<Favs/>} />
                  <Route path='*' element= {<Error404/>} />
                </Route>
              </Routes>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes