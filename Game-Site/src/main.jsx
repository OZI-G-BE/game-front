import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GamePage from './gamePage.jsx'
import AboutUs from './about.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children:[
        {
          path: '/gamePage/:title',
          element: <GamePage />,
        },
      ],
  },
  {
    path: '/AboutUs',
    element: <AboutUs />,
  },
  
 
  // {
  //     path: '/about-us',
  //     element: <AboutUs />,
  // },
  // {
  //     path: '/categories',
  //     element: <Categories />,
  // },
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);