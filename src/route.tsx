import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/layouts/Navbar/Navbar';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <>
        <Navbar />
        <LoginPage />
      </>
    ),
  },
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
    path: '/about',
    element: (
      <>
        <Navbar />
        <AboutPage />
      </>
    ),
  },
  {
    path: '/service',
    element: (
      <>
        <Navbar />
        <ServicePage />
      </>
    ),
  },
]);

export default router;
