import { Request, Response } from 'express'
import User from '@src/models/users'
import { user } from '@src/lib/response'
import Task, { TaskSync } from '@src/models/tasks'
// import { sequelize } from '@src/db/connection'

export async function readUsers(req: Request, res: Response) {
    const { page = 1, limit = 2 } = req.query
    const offset = (+page - 1) * +limit
    try {
        const response = await User.findAll({
            // attributes: ['id', 'firstName', 'lastName', 'username', 'email', 'phone'],
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: Task,
                    as: 'tasklist',
                    attributes: ['id', 'name']
                    // required: true
                }
            ],
            limit: +limit,
            offset: offset
        })
        return res.status(200).json({
            message: user.readSuccess,
            data: response,
            page: +page,
            limit: +limit
        })
    } catch (err) {
        return res.status(400).json({
            message: 'Bad request!',
            error: err,
        })
    }
}

export async function createUser(req: Request, res: Response) {
    try {
        const response = await User.create({ ...req.body })
        return res.status(201).json({
            message: user.writeSuccess,
            data: response,
        })
    } catch (err) {
        return res.status(400).json({
            message: 'Bad request!',
            error: err,
        })
    }
}

export async function readUser(req: Request, res: Response) {
    try {
        const response = await User.findByPk(req.params.id)
        return res.status(200).json({
            message: user.readSuccess,
            data: response,
        })
    } catch (err) {
        return res.status(400).json({
            message: 'Bad request!',
            error: err,
        })
    }
}

// export async function readTasks(req: Request, res: Response) {
//     try {
//         // await TaskSync()
//         const response = await Task.findAll({
//             include: {
//                 model: User,
//                 as: 'userInfo'
//             }
//         })
//         return res.status(200).json({
//             message: 'Task fetched successfully',
//             data: response
//         })
//     } catch (err) {
//         return res.status(400).json({
//             message: 'Bad request!',
//             error: err,
//         })
//     }
// }
