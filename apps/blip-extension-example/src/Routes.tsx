import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Extension from './pages/Home/Extension';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/extension',
        element: <Extension />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
