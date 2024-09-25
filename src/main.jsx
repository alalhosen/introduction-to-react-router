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
import Contact from './component/Contact/Contact.jsx';

const router =createBrowserRouter([
{
  path:'/',
  element:<Home></Home>,

},
{
  path:'contact',
  element:<Contact></Contact>
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
