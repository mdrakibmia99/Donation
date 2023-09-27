import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import DonationData from './context/ContextApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DonationData>
      <RouterProvider router={router}>
      </RouterProvider>
    </DonationData>
  </React.StrictMode>,
)
