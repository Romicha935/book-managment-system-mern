import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router";
import Home from './pages/home/Home.jsx';
import { RouterProvider } from 'react-router-dom';


const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children: [
      {
        path:'/',
        element:<Home/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  
   <StrictMode>
    <RouterProvider router={routes}>

    </RouterProvider>
   </StrictMode>,
)
