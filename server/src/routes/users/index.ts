import express from 'express'
import { readUsers, createUser, readUser, readTasks } from '@src/controllers/users'

const router = express.Router()

router.route('/tasks').get(readTasks)
router.route('/users/:id').get(readUser)
router.route('/users').get(readUsers).post(createUser)

export default router
