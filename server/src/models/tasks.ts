import { DataTypes } from 'sequelize'
import { sequelize } from '@src/db/connection'
import User from './users'

const Task = sequelize.define(
    'tasks',
    {
        name: DataTypes.STRING,
        // user: DataTypes.INTEGER,
    },
    {}
)

Task.belongsTo(User, { as: 'userInfo', foreignKey: 'user' })
User.hasMany(Task, { as: 'tasklist', foreignKey: 'user' })

export const TaskSync = async () => await sequelize.sync({ alter: true })

export default Task
