import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import { routes } from '../routes'

const server = express()

server.use(helmet())
server.use(compression())
server.use(express.json())
server.use(routes)

const port = 3333
server.listen(port, () => { console.log(`SERVER RUNNING ON http://localhost:${port}/`) })
