import express from 'express'
import helmet from 'helmet'
import { routes } from '../routes'

const server = express()

server.use(helmet())
server.use(express.json())
server.use(routes)

const port = 3333
server.listen(port, () => { console.log(`[UP] Server running on http://localhost:${port}/`) })
