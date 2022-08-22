import { Request, Response } from 'express'
import User from '@src/models/users'
import { user } from '@src/lib/response'

export async function readUsers(req: Request, res: Response) {
    const { page = 1, limit = 2 } = req.query
    const offset = (+page - 1) * +limit
    try {
        const response = await User.findAll({
            order: [['createdAt', 'DESC']],
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