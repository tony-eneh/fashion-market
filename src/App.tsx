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
    path: '/fashion-market',
    element: <Home />,
  },
  {
    path: '/fashion-market/settings',
    element: <Settings />,
  },
  {
    path: '/fashion-market/voucher',
    element: <Voucher />,
  },
  {
    path: '/fashion-market/wallet',
    element: <Wallet />,
  },
  {
    path: '/fashion-market/products/:id',
    element: <ProductDetail />,
  },
  {
    path: '*',
    element: <Navigate replace to="/fashion-market" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
