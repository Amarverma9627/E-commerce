import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Product from './Product.jsx'
import Navbar from './Navbar.jsx'
import { MainData} from './GlobalData.jsx'
import Popup from './Popup.jsx'


let approute=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/navbar',
    element:<Navbar/>
  },
  {
    path:'/product',
    element:<Product/>
  },
  {
    path:'/maindata',
    element:<MainData/>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={approute}>
    <App />
  </RouterProvider>
)
