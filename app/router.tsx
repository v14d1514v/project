import { createBrowserRouter } from 'react-router'
import { Default } from '~/layouts/Default'
import { Home } from '~/views/Home'
import { Game } from '~/views/Game'
import { Error } from '~/views/Error'

export const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      { index: true, element: <Home /> },
      { path: 'game', element: <Game /> },
      { path: '*', element: <Error /> }
    ]
  }
])
