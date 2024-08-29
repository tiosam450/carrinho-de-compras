import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import rotas from './rotas/rotas'
import APIprovider from './api/contextApi'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APIprovider>
      <RouterProvider router={rotas}/>
    </APIprovider>

  </StrictMode>,
)
