import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/pages/loginPage/LoginPage';
import HomePage from './components/pages/homePage/HomePage';
import LocalStorageService from './services/localStorageService';
import ProtectedRoutes from './components/atoms/protectedRoutes/ProtectedRoutes';

function App() {
  const { worker } = require('./mocks/browser');
  worker.start();

  const user = LocalStorageService.getUser();

  const isEnabled = user ? true : false;

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />

          <Route
            path='/home'
            element={
              <ProtectedRoutes isEnabled={isEnabled}>
                <HomePage />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
