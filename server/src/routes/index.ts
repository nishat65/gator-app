import {
    Express,
    Request,
    Response,
    NextFunction,
    ErrorRequestHandler,
} from 'express'
import userRoutes from '@src/routes/users/index'
import taskRoutes from '@src/routes/tasks/index'

export function routerConfig(app: Express) {
    app.use('/api/v1', userRoutes)
    app.use('/api/v1', taskRoutes)
    app.use('', function (req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({
            message: 'ok',
        })
    })
    app.all('*', function (req: Request, res: Response, next: NextFunction) {
        return res.status(404).json({
            message: `Requested url ${req.originalUrl} not found!`,
            error: req.originalUrl,
        })
    })

    app.use(function (
        error: ErrorRequestHandler,
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        return res.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    })
}

export default routerConfig
