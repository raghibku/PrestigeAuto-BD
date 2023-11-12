import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/registration/Login/Login.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import Register from './components/registration/Register/Register.jsx'
import MyCart from './components/others/MyCart.jsx'
import AddProduct from './components/others/AddProduct.jsx'
import BrandDetail from './components/others/BrandDetail.jsx'
import ProductDetail from './components/others/ProductDetail.jsx'
import UpdateProduct from './components/others/UpdateProduct.jsx'
import Private from './components/layout/Private.jsx'
import NotFound from './components/Error/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement:  <NotFound/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/my-cart',
        element: <Private><MyCart/></Private>
      },
      {
        path: '/add-product',
        element: <Private><AddProduct/></Private>
      },
      {
        path: '/brand-detail/:brandName',
        element: <BrandDetail/>
      },
      {
        path: '/product-detail/:id',
        element: <Private><ProductDetail/></Private>
      },
      {
        path: '/update-product/:id',
        element: <Private><UpdateProduct/></Private>,
        loader: ({params})=>fetch(`https://brand-shop-server-dw6nsjbsy-raghibs-projects.vercel.app/car/${params.id}`)
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
