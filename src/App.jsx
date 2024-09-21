import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main'
import About from './pages/About'
import TPO_Dashboard from './pages/TPO_Dashboard'
import Login from './pages/Login'

const router= createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children: [
      {
        path:'/',
        element:<Login />
      },
      {
        path: '/tpo',
        element: <TPO_Dashboard />
      },
      {
        path:'/student',
        element:<Student_Dashboard/>

      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
