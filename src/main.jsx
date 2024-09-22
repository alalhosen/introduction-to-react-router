import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/home/Home.jsx';
import About from './component/About/About.jsx';

const router =createBrowserRouter([
{
  path:'/',
  element:<Home></Home>,
  children:[
    {
      path:'/about',
      element:<About></About>
    }
  ]
},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
