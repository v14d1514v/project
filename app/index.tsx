import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { router } from '~/router'

const container = document.querySelector('main-layout')
const app = createRoot(container as HTMLElement)

app.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
