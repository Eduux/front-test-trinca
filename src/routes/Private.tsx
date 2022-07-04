import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from 'helpers/auth';

interface IProps {
  component: ReactElement;
}

const PrivateRoute: React.FC<IProps> = ({ component }) => {
  const signedIn = isAuthenticated();

  return signedIn ? component : <Navigate to="/login" />;
};

export default PrivateRoute;
