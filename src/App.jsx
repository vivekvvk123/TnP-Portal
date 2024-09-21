import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main'
import About from './pages/About'
import TPO_Dashboard from './pages/TPO_Dashboard'

const router= createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children: [
      {
        path: '/',
        element: <TPO_Dashboard />
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
