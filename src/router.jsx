import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Dashboard from './pages/mainPages/dashboard';
import Billing from './pages/mainPages/billing';
import Undangan from './pages/mainPages/undangan';
import Pengaturan from './pages/mainPages/pengaturan';
import NotFound from './pages/notFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" replace />,  // Redirect ke login saat pertama kali run
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/billing',
        element: <Billing />,
    },
    {
        path: '/undangan',
        element: <Undangan />,
    },
    {
        path: '/pengaturan',
        element: <Pengaturan />,
    },
    {
        path: '*',  // Menangani semua rute yang tidak ada
        element: <NotFound />,
    },
]);

export default router;