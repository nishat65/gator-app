import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import routes, { IRoutes } from 'routes/index'

function App() {
    return (
        <Suspense fallback={'loading'}>
            <Routes>
                {routes.map((route: IRoutes) => (
                    <Route
                        key={route.id}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default App
