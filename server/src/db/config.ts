export const config = {
    HOST: process.env.HOST as string,
    USER: process.env.USER as string,
    PASSWORD: process.env.PASSWORD as string,
    DB: process.env.DB as string,
    dialect: process.env.dialect as string,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
}
