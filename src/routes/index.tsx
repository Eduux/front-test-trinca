import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import Private from './Private';

import Login from 'pages/Login';
import BarbecueDetails from 'pages/BarbecueDetails';
import BarbecueListing from 'pages/BarbecueListing';

const RoutesConfig: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Private component={<BarbecueListing />} />} />
      <Route
        path="/barbecue/:id"
        element={<Private component={<BarbecueDetails />} />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
