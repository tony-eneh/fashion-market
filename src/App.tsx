import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Settings } from './pages/Settings';
import { Voucher } from './pages/Voucher';
import { Wallet } from './pages/Wallet';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/voucher',
    element: <Voucher />,
  },
  {
    path: '/wallet',
    element: <Wallet />,
  },
  {
    path: '/products/:id',
    element: <ProductDetail />,
  },
  {
    path: '*',
    element: <Navigate replace to="/home" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
