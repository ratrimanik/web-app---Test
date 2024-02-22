/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Import ini digunakan untuk React Router DOM
import Dashboard from './pages/Beranda/DashboardPage'
import FollowPage from './pages/Beranda/FollowPage'
import QuestionPage from './pages/Pertanyaan/QuestionPage'
import ForYouPage from './pages/Pertanyaan/ForYouPage'
import Draf from './pages/Pertanyaan/Draf'
import Forum from './pages/Forum/forum'
import JelajahiPage from './pages/Jelajahi/Jelajahi'
import NotifikasiPage from './pages/Notifikasi/notifikasi'
import Unread from './pages/Notifikasi/Unread'
import LoginPage from './pages/Auth/LoginPage'
import RegisterPage from './pages/Auth/RegisterPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/follow',
    element: <FollowPage />,
  },
  {
    path: '/question',
    element: <QuestionPage />
  },
  {
    path: '/foryou',
    element: <ForYouPage />
  },
  {
    path: '/draf',
    element: <Draf />,
  },
  {
    path: '/forum',
    element: <Forum />
  },
  {
    path: '/jelajahi',
    element: <JelajahiPage />
  },
  {
    path: '/notif',
    element: <NotifikasiPage />
  },
  {
    path: '/unread',
    element: <Unread />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)