import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/pages/loginPage/LoginPage';
import HomePage from './components/pages/homePage/HomePage';
import LocalStorageService from './services/localStorageService';
import ProtectedRoutes from './components/atoms/protectedRoutes/ProtectedRoutes';

function App() {
  const user = LocalStorageService.getUser();

  let isEnabled = false;

  if (user) isEnabled = true;

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />

          <Route
            path='/home'
            element={
              <ProtectedRoutes>
                <HomePage />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
{
}

export default App;
