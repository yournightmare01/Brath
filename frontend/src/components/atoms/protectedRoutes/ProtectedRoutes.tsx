import { Navigate } from 'react-router-dom';

import LocalStorageService from '../../../services/localStorageService';

type ProtectedRouteProps = {
  isEnabled?: boolean;
  children: JSX.Element;
};

const ProtectedRoutes = ({ isEnabled, children }: ProtectedRouteProps) => {
  const user = LocalStorageService.getUser();

  if (user === null) {
    return <Navigate to='/' />;
  }

  return children;
};
export default ProtectedRoutes;
