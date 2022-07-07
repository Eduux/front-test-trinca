import React from 'react';
import { Routes, HashRouter, Route } from 'react-router-dom';

import Private from './Private';

import Login from 'pages/Login';
import BarbecueDetails from 'pages/BarbecueDetails';
import BarbecueListing from 'pages/BarbecueListing';
import BarbecueCreate from 'pages/BarbecueCreate';

const RoutesConfig: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route index element={<Private component={<BarbecueListing />} />} />
      <Route
        path="/barbecue"
        element={<Private component={<BarbecueCreate />} />}
      />
      <Route
        path="/barbecue/:id"
        element={<Private component={<BarbecueDetails />} />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  </HashRouter>
);

export default RoutesConfig;
