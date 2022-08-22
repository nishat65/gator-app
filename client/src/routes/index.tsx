import { ReactNode } from 'react'
import pages from 'pages/index'

const { Home, Login, Task } = pages

export interface IRoutes {
    id: string
    name: string
    element: ReactNode
    path: string
}

const routes: IRoutes[] = [
    {
        id: 'home',
        name: 'Home',
        element: <Home />,
        path: '/home',
    },
    {
        id: 'task',
        name: 'Task',
        element: <Task />,
        path: '/task',
    },
    {
        id: 'login',
        name: 'Login',
        element: <Login />,
        path: '/',
    },
]

export default routes
