import { DataTypes } from 'sequelize'
import { phoneRegex } from '@src/lib/utils'
import { sequelize } from '@src/db/connection'

const User = sequelize.define(
    'users',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
            set(value: string) {
                this.setDataValue('email', value.toLowerCase())
            },
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: phoneRegex,
            },
        },
    },
    {}
)

export default User
