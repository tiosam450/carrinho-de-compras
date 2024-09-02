import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import rotas from './rotas/rotas'
import {APIprovider} from './api/contextApi'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APIprovider>
    <Toaster position="top-center" reverseOrder={false}/>
      <RouterProvider router={rotas}/>
    </APIprovider>

  </StrictMode>,
)
