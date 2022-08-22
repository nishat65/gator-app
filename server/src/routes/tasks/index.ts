import express from 'express'
import { readTasks } from '@src/controllers/tasks'

const router = express.Router()

router.route('/tasks').get(readTasks)

export default router