// routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Homepage/Homepage';
import Services from './Pages/ServiceSection/serviceSection';
import Signin from './Pages/Signing/sign_in';
import Registration from './Pages/Signing/registration';
import Login from './Pages/Signing/login';
import Data from './Pages/Employee/Data/Data'
import NotFound from '../src/Components/NotFound/NotFound';
import NotAuthorized from './Components/NotAuthorized/NotAuthorized';

import { AuthProvider } from './Components/Authentication/AuthContext';
import { useAuth } from './Components/Authentication/AuthContext';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Define your routes here */}
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path='Employee/Data'
        element={isAuthenticated ? <Data /> : <NotAuthorized />}
      />
      {/* 404 Not Found Page */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

const RoutesFunc = () => {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default RoutesFunc;
