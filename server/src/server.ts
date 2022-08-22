import 'module-alias/register'
import express from 'express'
import morgan from 'morgan'
import env from 'dotenv'
import cors from 'cors'

env.config({
    path: '.env',
})

import { checkConnection } from '@src/db/connection'
import routerConfig from '@src/routes/index'

checkConnection()

const app = express()

app.use(express.json())
app.use(morgan('common'))
app.use(cors())

routerConfig(app)

const PATH = process.env.port || 4000

app.listen(PATH, () => {
    console.log(`listening to http://localhost:${PATH}`)
})
