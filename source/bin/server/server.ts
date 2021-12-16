import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import { indexRoutes } from '../../routes/index.routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../server/swagger.json'

const server = express()

server.use(helmet())
server.use(compression())
server.use(express.json())
server.use(indexRoutes)
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const port = 3333
server.listen(port, () => { console.log(`SERVER RUNNING ON http://localhost:${port}/`) })
