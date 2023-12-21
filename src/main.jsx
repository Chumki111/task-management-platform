import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Context/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider> 
      <div>
     <RouterProvider router={Router} />
     </div>
     </HelmetProvider>
    </QueryClientProvider>
   
   </AuthProvider>
  </React.StrictMode>,
)
