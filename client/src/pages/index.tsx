import { lazy } from 'react'
const routes = {
    Home: lazy(() => import('pages/Home/index')),
    Task: lazy(() => import('pages/Task/index')),
    Login: lazy(() => import('pages/Login/index')),
}

export default routes
