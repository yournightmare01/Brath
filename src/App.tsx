import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/pages/loginPage/LoginPage';
import HomePage from './components/pages/homePage/HomePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
