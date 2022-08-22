import { Sequelize } from 'sequelize'
import { config as dbConfig } from '@src/db/config'

export const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: 'postgres',
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
        logging: console.log,
    }
)

export async function checkConnection() {
    try {
        await sequelize.authenticate()
        console.log('connection is succesful!')
    } catch (error) {
        console.error('unable to connect', error)
        process.exit(1)
    }
}
