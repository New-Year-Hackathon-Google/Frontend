import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/layouts/Navbar/Navbar';

const router = createBrowserRouter([
  {
    path: '/',

    element: (
      <>
        <Navbar />
        <HomePage />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <Navbar />
        <LoginPage />{' '}
      </>
    ),
  },
]);

export default router;
