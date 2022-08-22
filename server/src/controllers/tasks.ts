import { Request, Response } from 'express'
import User from '@src/models/users'
import Task from '@src/models/tasks'

export async function readTasks(req: Request, res: Response) {
    try {
        const response = await Task.findAll({
            include: {
                model: User,
                as: 'userInfo'
            }
        })
        return res.status(200).json({
            message: 'Task fetched successfully',
            data: response
        })
    } catch (err) {
        return res.status(400).json({
            message: 'Bad request!',
            error: err,
        })
    }
}