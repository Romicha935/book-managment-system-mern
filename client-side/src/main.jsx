import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router";
import Home from './pages/home/Home.jsx';
import { RouterProvider } from 'react-router-dom';
import Shop from './pages/shop/Shop.jsx';
import EditBook from './pages/editBook/EditBook.jsx';
import BookDetails from './pages/bookDetails/BookDetails.jsx';
import AddBook from './pages/addBook/AddBook.jsx';
import Membership from './pages/membarship/Membarship.jsx';
import Ebooks from './pages/eBooks/EBooks.js';


const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/books',
        element:<Shop/>
      },
      {
        path:'/books/edit/:id',
        element:<EditBook/>
      },
      {
        path:'/books/:id',
        element:<BookDetails/>
      },
      {
        path:'/books/add',
        element:<AddBook/>
      },
      {
        path:'/membership',
        element:<Membership/>
      },
      {
        path:'/ebooks',
        element:<Ebooks/>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  
   <StrictMode>
    <RouterProvider router={routes}>

    </RouterProvider>
   </StrictMode>,
)
