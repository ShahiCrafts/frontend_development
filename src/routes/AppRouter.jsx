import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from '../pages/Signup';
import Login from '../pages/Login';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
