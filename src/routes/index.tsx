import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import Login from 'pages/Login';
import BarbecueDetails from 'pages/BarbecueDetails';
import BarbecueListing from 'pages/BarbecueListing';

const RoutesConfig: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/list" element={<BarbecueListing />} />
      <Route path="/details:barbecueId" element={<BarbecueDetails />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
