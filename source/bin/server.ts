import express from 'express'
import helmet from 'helmet'
import { routes } from '../routes'
require('dotenv').config()

const server = express()

server.use(helmet())
server.use(express.json())
server.use(routes)

const port = process.env.SERVER_PORT
server.listen(port, () => { console.log(`SERVER RUNNING ON http://localhost:${port}/`) })
